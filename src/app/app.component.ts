import {Component} from '@angular/core';
import {DataAccesService} from './Core/Services/BBDD/data-acces.service';
import {AnotacionesService} from './Core/Services/Anotaciones/anotaciones.service';
import {RecordatorioService} from './Core/Services/Recordatorio/recordatorio.service';
import {FondosService} from './Core/Services/Fondos/fondos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  }
}
