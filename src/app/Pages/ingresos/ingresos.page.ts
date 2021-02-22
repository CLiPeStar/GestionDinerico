import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {
  private _title: string = 'Añadir ingreso';
  private _menu: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  get menu(): boolean {
    return this._menu;
  }

  get title(): string {
    return this._title;
  }
}
