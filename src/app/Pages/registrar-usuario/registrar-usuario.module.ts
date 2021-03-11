import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarUsuarioPageRoutingModule } from './registrar-usuario-routing.module';

import { RegistrarUsuarioPage } from './registrar-usuario.page';
import {ComponentModule} from '../../Components/component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistrarUsuarioPageRoutingModule,
        ComponentModule,
        ReactiveFormsModule
    ],
  declarations: [RegistrarUsuarioPage]
})
export class RegistrarUsuarioPageModule {}
