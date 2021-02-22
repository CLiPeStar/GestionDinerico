import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operaciones-historic',
  templateUrl: './operaciones-historic.page.html',
  styleUrls: ['./operaciones-historic.page.scss'],
})
export class OperacionesHistoricPage implements OnInit {
  // tslint:disable-next-line:variable-name
  private _tituloFondo = 'Mes';

  constructor() {
  }

  ngOnInit() {
  }

  get tituloFondo(): string {
    return this._tituloFondo;
  }
}
