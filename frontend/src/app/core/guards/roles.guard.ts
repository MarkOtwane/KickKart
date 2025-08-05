import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const rolesGuard = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();
  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }

  const user = auth.decodeJwt(token);
  const requiredRoles = route.data['roles'] as string[];

  if (!requiredRoles.includes(user.role)) {
    router.navigate(['/not-authorized']);
    return false;
  }

  return true;
};
