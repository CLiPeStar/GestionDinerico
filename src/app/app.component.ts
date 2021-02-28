import {Component} from '@angular/core';
import {DataAccesService} from './Core/Services/BBDD/data-acces.service';
import {AnotacionesService} from './Core/Services/Anotaciones/anotaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private db: DataAccesService, private anot: AnotacionesService) {
  }
}
