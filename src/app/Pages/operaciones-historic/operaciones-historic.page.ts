import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operaciones-historic',
  templateUrl: './operaciones-historic.page.html',
  styleUrls: ['./operaciones-historic.page.scss'],
})
export class OperacionesHistoricPage implements OnInit {
  private _tituloFondo = 'Mes';
  id: number = 3;

  constructor() {
  }

  ngOnInit() {
  }


  get tituloFondo(): string {
    return this._tituloFondo;
  }
}
