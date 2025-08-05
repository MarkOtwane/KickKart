import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('Auth Interceptor - URL:', req.url);
  console.log('Auth Interceptor - Token:', token ? 'Present' : 'Missing');

  if (token) {
    // Decode and log token info
    const decoded = authService.decodeJwt(token);
    console.log('Auth Interceptor - Token payload:', decoded);
    console.log(
      'Auth Interceptor - Token expired:',
      decoded?.exp ? new Date(decoded.exp * 1000) < new Date() : 'Unknown'
    );

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    console.log('Auth Interceptor - Adding Authorization header');
    console.log('Auth Interceptor - Full headers:', authReq.headers);
    return next(authReq);
  }

  console.log('Auth Interceptor - No token, proceeding without auth');
  return next(req);
};
