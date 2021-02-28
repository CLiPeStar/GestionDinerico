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

  private _fondosArray: Fondo[];
  public doughnutChart: any = null;

  constructor(private route: Router, public act: ActivatedRoute, private fondos: FondosService) {
    this._fondosArray = [];
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
    const arrayName: Map<Anotaciones, number> = new Map<Anotaciones, number>();
    const arrayDatos: number[] = [];
    const arrayColor: string[] = [];
    const arrayLabel: string[] = [];

    this.doughnutChart = new Chart('charts', {
      type: 'doughnut',
      data: {
        labels: ['Salario'],
        datasets: [{
          label: '# of Votes',
          data: [this.fondos.fondosMap.get(2).monto],
          backgroundColor: [
            '#025955',
          ]

        }]
      }
    });
  }


  public routerMe(item: Fondo) {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {}
    };
    this.route.navigate(['operaciones-historic'], extrasDeNavegcacion);
  }

  get fondosArray(): Fondo[] {
    return this._fondosArray;
  }


}
