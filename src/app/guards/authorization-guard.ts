import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from "@angular/router";

export const authorizationGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  {
    const authService: AuthService = inject(AuthService);
    const router = inject(Router);

    if (authService.hasAccess().includes('admin')) {
      console.log(authService.hasAccess())
      return true
    } else


      router.navigate(['/'])
    return false;
  };
}
