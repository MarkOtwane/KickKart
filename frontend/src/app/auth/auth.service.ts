import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  httpClient = inject(HttpClient);
  apiUrl = environment.apiUrl;

  signup(data: any) {
    return this.httpClient.post(`${this.apiUrl}/register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.apiUrl}/login`, data).pipe(
      tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      })
    );
  }

  logout() {
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
