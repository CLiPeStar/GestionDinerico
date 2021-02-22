import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionesHistoricPageRoutingModule } from './operaciones-historic-routing.module';

import { OperacionesHistoricPage } from './operaciones-historic.page';
import {ComponentModule} from '../../Components/component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OperacionesHistoricPageRoutingModule,
        ComponentModule
    ],
  declarations: [OperacionesHistoricPage]
})
export class OperacionesHistoricPageModule {}
