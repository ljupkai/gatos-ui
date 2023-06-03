import { Routes } from '@angular/router';
// import { leavePageGuard } from '../guards/leave-page.guard';
// import { logoutActivateGuard } from '../guards/logout-activate.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    // canActivate: [logoutActivateGuard],
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registro',
    // canActivate: [logoutActivateGuard],
    // canDeactivate: [leavePageGuard],
    loadComponent: () =>
      import('./registro/registro.component').then((m) => m.RegistroComponent),
  },
];
