import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const logoutActivateGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isLogged().subscribe({
    next: (value) =>
      value
        ? (console.log('redirecting to login'),
          router.navigate(['/auth/login']))
        : true,
  });
};
