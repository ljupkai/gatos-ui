import { Routes } from "@angular/router";
import { GatoFormComponent } from "./gatos/gato-form/gato-form.component";
import { GatosListaComponent } from "./gatos/gatos-lista/gatos-lista.component";
import { AdoptarComponent } from "./paginas/adoptar/adoptar.component";
import { DonarComponent } from "./paginas/donar/donar.component";

export const APP_ROUTES: Routes = [{
  path: '',
  component: GatosListaComponent
},{
path: 'donar',
component: DonarComponent},
{
  path: 'adoptar',
  component: AdoptarComponent
},
{
  path: 'add',
  component: GatoFormComponent
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
]
