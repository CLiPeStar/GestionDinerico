import {Injectable} from '@angular/core';
import {Fondo} from '../../Class/Fondo';
import {DataAccesService} from '../BBDD/data-acces.service';
import {OperacionesService} from '../Operaciones/operaciones.service';
import {Operacion} from '../../Class/Operacion';
import {OperacionSimplificada} from '../../Class/OperacionSimplificada';
import {AnotacionesService} from '../Anotaciones/anotaciones.service';

@Injectable({
  providedIn: 'root'
})
export class FondosService {
  private _fondosMap: Map<number, Fondo>;
  private _fondosArray: Fondo[];
  private _dateNow: number;


  private lastOp: Operacion;

  constructor(private db: DataAccesService, private operacionesService: OperacionesService, private anotacioneservice: AnotacionesService) {
    this._fondosArray = [];
    this._fondosMap = new Map<number, Fondo>();
    this.generateIdMonth();
    this.generateData();
  }

  private generateData() {

    return new Promise<void>((resolve, reject) => {
      this.db.GetLastOp(this._dateNow)
        .then((lastOp) => {
          lastOp.forEach((x) => {
            const anot = this.anotacioneservice.anotacionesMap.get(x.anotacionId);
            const operacion: Operacion = new Operacion(x.id, x.concepto, x.monto, anot, x.fechaOperacion, x.isSpend);
            this.lastOp = operacion;
          })
          ;

          this.db.getFondoByIdMes(this._dateNow)
            .then((data) => {

              data.forEach((e) => {
                let arrayOp: Operacion[] = [];
                if (this.operacionesService.operaciones.get(e.id)) {
                  arrayOp = this.operacionesService.operaciones.get(e.id).get(e.idMes);
                }

                const fondo = new Fondo(e.name, e.fondo, e.idMes, arrayOp, e.gastado, this.lastOp, e.id);
                this._fondosMap.set(fondo.id, fondo);
                this._fondosArray.push(fondo);
              });
              resolve();
            })
            .catch((err) => {
              console.log('Fondos services 52:' + err);
            });
        })
        .catch((err) => {
          console.log('Fondos services 56:' + err);
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

  actualizarSaldos(ope: OperacionSimplificada) {
    const fondo = this.fondosMap.get(+ope.fondo);
    let monto = 0;
    let gastado = 0;
    if (ope.isSpend) {
      monto = fondo.monto - ope.monto;
      gastado = fondo.gastado + ope.monto;
    } else {
      monto = fondo.monto + ope.monto;
      gastado = fondo.gastado;

    }
    this._fondosArray = [];
    this._fondosMap = new Map<number, Fondo>();
    return new Promise<Array<any>>((resolve, reject) => {
      this.db.UpdateDataFondo(monto, gastado, fondo.id, fondo.idMes)
        .then((data) => {
            this.generateData().then(() => resolve());
          }
        )
        .catch((err) => {
          reject(err);
        });
    });
  }

  get fondosArray(): Fondo[] {
    return this._fondosArray;
  }

  get fondosMap(): Map<number, Fondo> {
    return this._fondosMap;
  }

  get dateNow(): number {
    return this._dateNow;
  }
}
