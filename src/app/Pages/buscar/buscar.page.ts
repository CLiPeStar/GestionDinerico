import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  private _titulo: string = 'Buscar';

  constructor() {
  }

  ngOnInit() {
  }

  get titulo(): string {
    return this._titulo;
  }
}
