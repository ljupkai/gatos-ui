import { Routes } from '@angular/router';
import { loginActivateGuard } from '../guards/login-activate.guard';
import { leavePageGuard } from '../guards/leave-page.guard';
// import { leavePageGuard } from '../guards/leave-page.guard';
// import { logoutActivateGuard } from '../guards/logout-activate.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registro',
    // canDeactivate: [leavePageGuard],
    loadComponent: () =>
      import('./registro/registro.component').then((m) => m.RegistroComponent),
  },
];
