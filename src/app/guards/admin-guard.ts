import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from "@angular/router";

export const authorizationGuard: CanActivateFn = () => {
  {
    const authService: AuthService = inject(AuthService);
    const router = inject(Router);

    if (authService.hasAccess())
      {return true}

    router.navigate(['auth/login'])
    return false;
  };
}


// ( next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot) => {
//   return inject(AuthService).hasAccess();
// }
