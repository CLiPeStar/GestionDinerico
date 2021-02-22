import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {CardFondosComponent} from './card-fondos/card-fondos.component';
import {MyHeaderComponent} from './my-header/my-header.component';
import {RouterModule} from '@angular/router';
import {FooterOperationComponent} from './footer-operation/footer-operation.component';
import {CardHistoricComponent} from './card-historic/card-historic.component';


@NgModule({
  declarations: [
    MenuComponent,
    CardFondosComponent,
    MyHeaderComponent,
    FooterOperationComponent,
    CardHistoricComponent,

  ],
  exports: [
    MenuComponent,
    CardFondosComponent,
    MyHeaderComponent,
    FooterOperationComponent,
    CardHistoricComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ]
})
export class ComponentModule {
}
