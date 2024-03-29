import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {Ahorros} from '../../Class/ahorros';

@Injectable({
  providedIn: 'root'
})
export class AhorrosService {
  private _ahorros: Ahorros[];


  constructor(private db: DataAccesService) {
    this._ahorros = [];

  }

  generateData() {
    return new Promise<void>((resolve, reject) => {
      this.db.GetHistoricoAhorros(new Date().getFullYear())
        .then((data) => {
          data.forEach((e) => {
            const ahorro: Ahorros = new Ahorros(e.monto, e.idMes);
            this._ahorros.push(ahorro);
          });
          resolve();
        })
        .catch((err) => {
          console.log('Ahorros services:' + err);
        });
    })
      .catch((err) => {
        console.log('Ahorros services:' + err);
      });


  }

  get ahorros(): Ahorros[] {
    return this._ahorros;
  }
}
