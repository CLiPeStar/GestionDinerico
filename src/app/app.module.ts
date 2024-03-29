import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentModule} from './Components/component.module';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {AnotacionesService} from './Core/Services/Anotaciones/anotaciones.service';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';
import {CopyDataBaseService} from './Core/Services/copyBBDD/copy-data-base.service';
import {DataAccesService} from './Core/Services/BBDD/data-acces.service';
import {OperacionesService} from './Core/Services/Operaciones/operaciones.service';
import {FondosService} from './Core/Services/Fondos/fondos.service';
import {RecordatorioService} from './Core/Services/Recordatorio/recordatorio.service';
import {HomePage} from './home/home.page';
import {UsuarioService} from './Core/Services/Usuario/usuario.service';
import {AhorrosService} from './Core/Services/Ahorros/ahorros.service';

registerLocaleData(localeEs);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentModule],
  providers: [
    HomePage,
    CopyDataBaseService,
    DataAccesService,
    AnotacionesService,
    OperacionesService,
    RecordatorioService,
    UsuarioService,
    AhorrosService,
    SqliteDbCopy,
    SQLite,
    FondosService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
