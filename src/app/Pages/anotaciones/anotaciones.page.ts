import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.page.html',
  styleUrls: ['./anotaciones.page.scss'],
})
export class AnotacionesPage implements OnInit {
  private _titulo: string = 'Anotaciones';


  arrayAnotaciones = [{name: 'Agua', color: '#8ac4d0'}, {name: 'Luz', color: '#f4d160'}, {name: 'Juegos', color: '#4a47a3'}];

  constructor() {
  }

  ngOnInit() {
  }

  anadirNuevaAnotacion() {
    alert('New Anotacion');
  }

  get titulo(): string {
    return this._titulo;
  }
}
