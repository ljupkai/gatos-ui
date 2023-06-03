import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [{
  path: 'gatos',
  loadChildren: () => import('./gatos/gatos-routes').then(m => m.GATOS_ROUTES)
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth-routes').then((m) => m.AUTH_ROUTES),
},
{
  path: '',
  redirectTo: 'gatos',
  pathMatch: 'full'
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
]
