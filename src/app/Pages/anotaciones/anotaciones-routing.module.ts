import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotacionesPage } from './anotaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AnotacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotacionesPageRoutingModule {}
