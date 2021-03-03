import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.page.html',
  styleUrls: ['./fondos.page.scss'],
})
export class FondosPage implements OnInit {

  // tslint:disable-next-line:variable-name
  private _fecha: string;

  constructor() {
    this._fecha = new Date().toLocaleDateString();
  }

  ngOnInit() {
  }


  get fecha(): string {
    return this._fecha;
  }


}
