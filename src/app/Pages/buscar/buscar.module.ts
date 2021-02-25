import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import {ComponentModule} from '../../Components/component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BuscarPageRoutingModule,
        ComponentModule,
        ReactiveFormsModule
    ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {}
