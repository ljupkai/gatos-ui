import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [{
  path: 'gatos',
  loadChildren: () => import('./gatos/gatos-routes').then(m => m.GATOS_ROUTES)
},
{
  path: '',
  redirectTo: 'gatos',
  pathMatch: 'full'
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
]
