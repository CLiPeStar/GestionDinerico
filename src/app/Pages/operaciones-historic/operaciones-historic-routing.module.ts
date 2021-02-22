import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesHistoricPage } from './operaciones-historic.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionesHistoricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesHistoricPageRoutingModule {}
