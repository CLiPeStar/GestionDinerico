import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  private _title: string = 'Añadir Gasto';
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
