import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();

  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }

  const decoded = auth.decodeJwt(token);
  const expired = decoded?.exp * 1000 < Date.now();

  if (expired) {
    auth.logout();
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
