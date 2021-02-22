import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  private _titulo: string = 'Cuenta';

  constructor() {
  }

  ngOnInit() {
  }

  get titulo(): string {
    return this._titulo;
  }
}
