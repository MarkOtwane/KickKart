import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../enviroment/enviroment';

const API = environment.apiUrl + '/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const res = await firstValueFrom(
        this.http.post<any>(`${API}/login`, { email, password })
      );

      const responseData = res.data || res;
      if (!responseData.access_token) throw new Error('No access token');

      const payload = this.decodeJwt(responseData.access_token);
      if (!payload) throw new Error('Invalid token');

      localStorage.setItem('access_token', responseData.access_token);
      return { ...payload, token: responseData.access_token };
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  decodeJwt(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      const payload = parts[1];
      const padded = payload + '='.repeat((4 - (payload.length % 4)) % 4);
      const decoded = decodeURIComponent(
        Array.prototype.map
          .call(
            atob(padded.replace(/-/g, '+').replace(/_/g, '/')),
            (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          )
          .join('')
      );
      return JSON.parse(decoded);
    } catch (err) {
      console.error('JWT decode failed:', err);
      return null;
    }
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  async register(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<any> {
    const res = await firstValueFrom(
      this.http.post<any>(`${API}/register`, data)
    );
    const responseData = res.data || res;
    if (!responseData.access_token) throw new Error('No access token');

    const payload = this.decodeJwt(responseData.access_token);
    localStorage.setItem('access_token', responseData.access_token);
    return { ...payload, token: responseData.access_token };
  }

  async requestResetPassword(email: string): Promise<void> {
    await firstValueFrom(
      this.http.post(`${API}/reset-password-request`, { email })
    );
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    await firstValueFrom(
      this.http.post(`${API}/update-password`, {
        token,
        newPassword,
      })
    );
  }
}
