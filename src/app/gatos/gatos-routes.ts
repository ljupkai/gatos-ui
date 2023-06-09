import { Routes } from "@angular/router";

import { DonarComponent } from "../paginas/donar/donar.component";
import { gatosResolver } from "../resolvers/gatos-resolver";
import { loginActivateGuard } from "../guards/login-activate.guard";
import { leavePageGuard } from "../guards/leave-page.guard";
import { logoutActivateGuard } from "../guards/logout-activate.guard";
import { authorizationGuard } from "../guards/admin-guard";

export const GATOS_ROUTES: Routes = [
  {
    path: "add",
    canActivate: [authorizationGuard],
    canDeactivate: [leavePageGuard],
    loadComponent: () => import('./gato-form/gato-form.component').then((m) => m.GatoFormComponent)
  },

  {
    path: 'adoptar',
    loadComponent: () => import("../paginas/adoptar/adoptar.component").then((m) => m.AdoptarComponent)
  },
  {
    path: 'donar',
    component: DonarComponent
  },
  {
    path: ':_id',
    resolve: {
      gato: gatosResolver,
    },
    loadComponent: () => import('./gato-detail/gato-detail.component').then((m) => m.GatoDetailComponent)
  },
  {
    path: "",
    loadComponent: () =>
      import("./gatos-lista/gatos-lista.component").then(
        (m) => m.GatosListaComponent
      ),
  },
];
