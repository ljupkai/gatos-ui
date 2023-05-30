import { Routes } from "@angular/router";
import { GatoFormComponent } from "./gato-form/gato-form.component";
import { AdoptarComponent } from "../paginas/adoptar/adoptar.component";
import { DonarComponent } from "../paginas/donar/donar.component";
import { gatosResolver } from "../resolvers/gatos-resolver";
import { GatoDetailComponent } from "./gato-detail/gato-detail.component";

export const GATOS_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./gatos-lista/gatos-lista.component").then(
        (m) => m.GatosListaComponent
      ),
  },
  {
    path: "add",
    component: GatoFormComponent,
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
    path: 'adoptar',
    component: AdoptarComponent
  },
  {
    path: 'donar',
    component: DonarComponent
  }
];
