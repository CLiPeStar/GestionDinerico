import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';

@Injectable({
  providedIn: 'root'
})
export class AhorrosService {
  private _dateNow: number;

  constructor(private db: DataAccesService) {
  }

  generateData() {
    return new Promise<void>((resolve, reject) => {


      this.db.GetHistoricoAhorros(this._dateNow)
        .then((data) => {
          data.forEach((e) => {

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

  private generateIdMonth() {
    const date = new Date();
    const month: string = (date.getMonth() + 1).toString();
    let year: string = date.getFullYear().toString();
    year = year.slice(2);
    const id = month + year;
    // tslint:disable-next-line:radix
    this._dateNow = Number.parseInt(id);
  }
}
