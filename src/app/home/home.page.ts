import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // tslint:disable-next-line:variable-name
  private _fecha: string;

  constructor() {
    this._fecha = new Date().toLocaleDateString();
  }

  get fecha(): string {
    return this._fecha;
  }


}
