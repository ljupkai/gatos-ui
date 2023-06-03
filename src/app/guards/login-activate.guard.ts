import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginActivateGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  let isLogged = false;

  authService.isLogged().subscribe({
    next: (value) => (isLogged = value),
  });

  return !isLogged
    ? (console.log('redirecting to login'), router.navigate(['/auth/login']))
    : true;
};
