import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondosPageRoutingModule } from './fondos-routing.module';

import { FondosPage } from './fondos.page';
import {ComponentModule} from "../../../Components/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FondosPageRoutingModule,
        ComponentModule
    ],
  declarations: [FondosPage]
})
export class FondosPageModule {}
