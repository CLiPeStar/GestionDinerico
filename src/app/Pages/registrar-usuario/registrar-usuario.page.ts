import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  private _title: string = 'Registro';

  constructor() {
  }

  ngOnInit() {
  }

  get title(): string {
    return this._title;
  }
}
