import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {Operacion} from '../../Class/Operacion';
import {AnotacionesService} from '../Anotaciones/anotaciones.service';
import {OperacionSimplificada} from '../../Class/OperacionSimplificada';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  private _operaciones: Map<number, Map<number, Operacion[]>>;
  private _dateNow: number;

  constructor(private db: DataAccesService, private anotacioneservice: AnotacionesService) {
    this.generateIdMonth();
    // this.generateData();
  }

   generateData() {
    this._operaciones = new Map<number, Map<number, Operacion[]>>();
    return new Promise<void>((resolve, reject) => {
      this.db.getHistoricoOperacionesByIdMes(this._dateNow)
        .then((data) => {
          data.forEach((e) => {
            const anot = this.anotacioneservice.anotacionesMap.get(e.anotacionId);
            const operacion: Operacion = new Operacion(e.id, e.concepto, e.monto, anot, e.fechaOperacion, e.isSpend);

            let arrayObjetos: Map<number, Operacion[]>;
            let array: Operacion[];
            if (this._operaciones.get(e.fondoId)) {

              arrayObjetos = this._operaciones.get(e.fondoId);
              array = arrayObjetos.get(e.idMes);
              array.push(operacion);
              arrayObjetos.set(e.idMes, array);
            } else {
              arrayObjetos = new Map<number, Operacion[]>();
              array = [];
              array.push(operacion);
              arrayObjetos.set(e.idMes, array);
            }


            this._operaciones.set(e.fondoId, arrayObjetos);
          });
          resolve();
        })
        .catch((err) => {
          console.log('Servicio operaciones:' + err);
          reject(err);
        });
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

  public registerNewOperation(operation: OperacionSimplificada) {
    return new Promise<Array<any>>((resolve, reject) => {
      this.db.InsertOperation(operation)
        .then((data) => {
            this.generateData().then(() => resolve(data));

          }
        )
        .catch((err) => {
          reject(err);
        });
    });

  }

  get operaciones(): Map<number, Map<number, Operacion[]>> {
    return this._operaciones;
  }

}
