import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';
import {Fondo} from '../../Core/Class/Fondo';
import {Anotaciones} from '../../Core/Class/Anotaciones';

@Component({
  selector: 'app-card-fondos',
  templateUrl: './card-fondos.component.html',
  styleUrls: ['./card-fondos.component.scss'],
})
export class CardFondosComponent implements OnInit {

  private _fondosArray: Fondo[] = [];
  public doughnutChart: any = null;

  constructor(private route: Router, public act: ActivatedRoute, private fondos: FondosService) {
    this._fondosArray = this.fondos.fondosArray;

  }

  ngOnInit() {
    this._fondosArray = this.fondos.fondosArray;
    setTimeout(() => {
      this.ionViewDidEnter();
    }, 1000);

  }

  ionViewDidEnter() {
    this.doughnutChartMethod();
  }

  async doughnutChartMethod() {
    const mapAnMo: Map<Anotaciones, number> = new Map<Anotaciones, number>();
    this.fondos.fondosArray.forEach((e) => {
      e.arrayOperaciones.forEach((x) => {
        if (!mapAnMo.get(x.anotacion)) {
          mapAnMo.set(x.anotacion, x.monto);
        } else {
          mapAnMo.set(x.anotacion, (mapAnMo.get(x.anotacion) + x.monto));
        }
      });
    });

    const arrayDatos: number[] = [];
    const arrayColor: string[] = [];
    const arrayLabel: string[] = [];
    // tslint:disable-next-line:forin
    for (const key of mapAnMo) {
      arrayLabel.push(key[0].name);
      arrayColor.push(key[0].color);
      arrayDatos.push(key[1]);
    }
    arrayDatos.push(this.fondos.fondosMap.get(this.fondos.fondoId).monto);
    arrayColor.push('#025955');
    arrayLabel.push('Salario');
    console.log(arrayColor);
    this.doughnutChart = new Chart('charts', {
      type: 'doughnut',
      data: {
        labels: arrayLabel,
        datasets: [{
          label: '# of Votes',
          data: arrayDatos,
          backgroundColor: arrayColor

        }]
      }
    });
  }


  public routerMe(item: Fondo) {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
        id: item.id
      }
    };
    this.route.navigate(['operaciones-historic'], extrasDeNavegcacion);
  }

  get fondosArray(): Fondo[] {
    return this._fondosArray;
  }


  set fondosArray(value: Fondo[]) {
    this._fondosArray = value;
  }
}
