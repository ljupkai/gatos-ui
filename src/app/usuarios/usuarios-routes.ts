import { Routes } from "@angular/router";
import { userResolver } from "../resolvers/usuario-resolver";
import { loginActivateGuard } from "../guards/login-activate.guard";
import { logoutActivateGuard } from "../guards/logout-activate.guard";

export const USUARIO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./perfil/perfil.component').then(m => m.PerfilComponent)
  },
  {
    path: ':_id',
    runGuardsAndResolvers: "always",
    resolve: {
      user: userResolver
    },
    loadComponent: () => import('./perfil/perfil.component'). then(m => m.PerfilComponent)
  }
];
