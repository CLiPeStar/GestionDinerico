import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosPageRoutingModule } from './ingresos-routing.module';

import { IngresosPage } from './ingresos.page';
import {ComponentModule} from '../../Components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosPageRoutingModule,
    ComponentModule
  ],
  declarations: [IngresosPage]
})
export class IngresosPageModule {}
