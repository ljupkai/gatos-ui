// import { inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const logoutActivateGuard = () => {
//   const router = inject(Router);
//   const authService = inject(AuthService);

//   return authService.isLogged().subscribe({
//     next: (value) =>
//       value
//         ? (console.log('redirecting to login'),
//           router.navigate(['/auth/login']))
//         : true,
//   });
// };

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const logoutActivateGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService)
    .isLogged()
    .pipe(
      map((logged) => {
        if (logged) {
          return router.createUrlTree(['/gatos']);
        }
        return true;
      })
    );
};
