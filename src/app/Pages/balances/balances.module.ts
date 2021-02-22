import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancesPageRoutingModule } from './balances-routing.module';

import { BalancesPage } from './balances.page';
import {ComponentModule} from '../../Components/component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BalancesPageRoutingModule,
        ComponentModule
    ],
  declarations: [BalancesPage]
})
export class BalancesPageModule {}
