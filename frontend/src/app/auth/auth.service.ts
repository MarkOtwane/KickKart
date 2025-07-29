import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  httpClient = inject(HttpClient);
  baserUrl = 'http:/localhost:3000/api';

  signup(data: any) {
    return this.httpClient.post(`${this.baserUrl}/register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.baserUrl}/login`, data).pipe(
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
