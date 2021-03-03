import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'operaciones-historic',
    loadChildren: () => import('./Pages/operaciones-historic/operaciones-historic.module').then( m => m.OperacionesHistoricPageModule)
  },
  {
    path: 'balances',
    loadChildren: () => import('./Pages/balances/balances.module').then( m => m.BalancesPageModule)
  },
  {
    path: 'recordatorios',
    loadChildren: () => import('./Pages/recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./Pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'anotaciones',
    loadChildren: () => import('./Pages/anotaciones/anotaciones.module').then( m => m.AnotacionesPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./Pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./Pages/ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./Pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },  {
    path: 'fondos',
    loadChildren: () => import('./Pages/Fondos/fondos/fondos.module').then( m => m.FondosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
