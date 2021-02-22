import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.page.html',
  styleUrls: ['./anotaciones.page.scss'],
})
export class AnotacionesPage implements OnInit {
  private _titulo: string = 'Anotaciones';

  constructor() {
  }

  ngOnInit() {
  }

  get titulo(): string {
    return this._titulo;
  }
}
