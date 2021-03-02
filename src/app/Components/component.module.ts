import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {CardFondosComponent} from './card-fondos/card-fondos.component';
import {MyHeaderComponent} from './my-header/my-header.component';
import {RouterModule} from '@angular/router';
import {FooterOperationComponent} from './footer-operation/footer-operation.component';
import {CardHistoricComponent} from './card-historic/card-historic.component';
import {FormRegisterComponent} from './form-register/form-register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    CardFondosComponent,
    MyHeaderComponent,
    FooterOperationComponent,
    CardHistoricComponent,
    FormRegisterComponent,

  ],
  exports: [
    MenuComponent,
    CardFondosComponent,
    MyHeaderComponent,
    FooterOperationComponent,
    CardHistoricComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [CardFondosComponent],
})
export class ComponentModule {
}
