import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

// export const loginActivateGuard = () => {
//   const router = inject(Router);
//   const authService = inject(AuthService);

//   let isLogged = false;

//   authService.isLogged().subscribe({
//     next: (value) => (isLogged = value),
//   });

//   return !isLogged
//     ? (console.log('redirecting to login'), router.navigate(['/auth/login']))
//     : true;
// };

export const loginActivateGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService)
    .isLogged()
    .pipe(
      map((logged) => {
        if (!logged) {
          return router.createUrlTree(['/auth/login']);
        }
        return true;
      })
    );
};
