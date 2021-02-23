import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operaciones-historic',
  templateUrl: './operaciones-historic.page.html',
  styleUrls: ['./operaciones-historic.page.scss'],
})
export class OperacionesHistoricPage implements OnInit {
  // tslint:disable-next-line:variable-name
  private _tituloFondo = 'Mes';
  private _id: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  get id(): number {
    return this._id;
  }

  get tituloFondo(): string {
    return this._tituloFondo;
  }
}
