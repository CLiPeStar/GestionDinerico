import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {AnotacionesService} from '../Core/Services/Anotaciones/anotaciones.service';
import {RecordatorioService} from '../Core/Services/Recordatorio/recordatorio.service';
import {FondosService} from '../Core/Services/Fondos/fondos.service';
import {OperacionesService} from '../Core/Services/Operaciones/operaciones.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private anotacionesService: AnotacionesService, private operacionesService: OperacionesService,
              private fondosService: FondosService, private router: Router) {
    this.generateDatas();
  }

  generateDatas() {
    this.anotacionesService.generateData()
      .then(() => {
        this.operacionesService.generateData()
          .then(() => {
            this.fondosService.generateData()
              .then(() => {
                this.router.navigate(['/fondos']);
              });
          });
      });
  }

}
