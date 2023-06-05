import { Routes } from "@angular/router";
import { userResolver } from "../resolvers/usuario-resolver";
import { loginActivateGuard } from "../guards/login-activate.guard";

export const USUARIO_ROUTES: Routes = [
  {
    path: '',
    canActivate: [loginActivateGuard],
    loadComponent: () => import('./perfil/perfil.component').then(m => m.PerfilComponent)
  },
  {
    path: ':_id',
    canActivate: [loginActivateGuard],
    resolve: {
      user: userResolver
    },
    loadComponent: () => import('./perfil/perfil.component'). then(m => m.PerfilComponent)
  }
];
