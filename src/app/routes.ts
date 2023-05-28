import { Routes } from "@angular/router";
import { GatoDetailComponent } from "./gatos/gato-detail/gato-detail.component";
import { GatoFormComponent } from "./gatos/gato-form/gato-form.component";
import { GatosListaComponent } from "./gatos/gatos-lista/gatos-lista.component";
import { AdoptarComponent } from "./paginas/adoptar/adoptar.component";
import { DonarComponent } from "./paginas/donar/donar.component";

export const APP_ROUTES: Routes = [{
  path: '',
  component: GatosListaComponent
},
{
path: 'gatos/donar',
component: DonarComponent},
{
  path: 'gatos/adoptar',
  component: AdoptarComponent
},
{
  path: 'gatos/add',
  component: GatoFormComponent
},
{
  path: 'gatos/:_id',
  component: GatoDetailComponent
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
]
