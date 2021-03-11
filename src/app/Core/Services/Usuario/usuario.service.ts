import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {Usuario} from '../../Class/Usuario';
import {Ahorros} from '../../Class/ahorros';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _Usuario: Usuario;

  constructor(private db: DataAccesService) {
  }

  generateData() {
    return new Promise<boolean>((resolve, reject) => {
      this.db.GetUsuario()
        .then((data) => {
          if (data[0]) {
            this._Usuario = new Usuario(data[0].name, data[0].fondoName, data[0].montoFondo, data[0].ahorro, data[0].idCliente);
            resolve(true);
          } else {
            resolve(false);
          }

        })
        .catch((err) => {
          console.log('Ahorros services:' + err);
        });
    })
      .catch((err) => {
        console.log('Ahorros services:' + err);
      });


  }

  get Usuario(): Usuario {
    return this._Usuario;
  }

  insertUser(usuario: Usuario) {
    return new Promise<void>((resolve, reject) => {
      this.db.InsertNewUsuario(usuario).then(() => resolve());
    });
  }

  updateUser(usuario: Usuario) {
    return new Promise<void>((resolve, reject) => {
      this.db.UpdateUsuario(usuario).then(() => resolve());
    });
  }
}