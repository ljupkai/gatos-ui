import { Routes } from "@angular/router";
import { GatoFormComponent } from "./gato-form/gato-form.component";

import { DonarComponent } from "../paginas/donar/donar.component";
import { gatosResolver } from "../resolvers/gatos-resolver";

export const GATOS_ROUTES: Routes = [
  {
    path: "add",
    component: GatoFormComponent,
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
    // component: GatoDetailComponent
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
