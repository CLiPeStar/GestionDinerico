import {Injectable} from '@angular/core';
import {Fondo} from '../../Class/Fondo';
import {DataAccesService} from '../BBDD/data-acces.service';
import {OperacionesService} from '../Operaciones/operaciones.service';
import {Operacion} from '../../Class/Operacion';
import {OperacionSimplificada} from '../../Class/OperacionSimplificada';
import {AnotacionesService} from '../Anotaciones/anotaciones.service';
import {UsuarioService} from '../Usuario/usuario.service';
import {FondoSimpl} from '../../Class/FondoSimpl';

@Injectable({
  providedIn: 'root'
})
export class FondosService {
  private _fondosMap: Map<number, Fondo>;
  private _fondosArray: Fondo[];
  private _dateNow: number;
  private _fondoId: number;


  private lastOp: Operacion;

  constructor(private db: DataAccesService, private operacionesService: OperacionesService, private anotacioneservice: AnotacionesService,
              private usuarioServ: UsuarioService) {

    this.generateIdMonth();
    // this.generateData();
  }

  generateData() {
    this._fondosArray = [];
    this._fondosMap = new Map<number, Fondo>();

    return new Promise<void>((resolve, reject) => {
      this.db.GetLastOp(this._dateNow)
        .then((lastOp) => {
          lastOp.forEach((x) => {
            const anot = this.anotacioneservice.anotacionesMap.get(x.anotacionId);
            const operacion: Operacion = new Operacion(x.id, x.concepto, x.monto, anot, x.fechaOperacion, x.isSpend);
            this.lastOp = operacion;
          });

          this.db.getFondoByIdMes(this._dateNow)
            .then((data) => {
              if (data[0]) {
                data.forEach((e) => {
                  this._fondoId = e.id;
                  let arrayOp: Operacion[] = [];
                  if (this.operacionesService.operaciones.get(e.id)) {
                    arrayOp = this.operacionesService.operaciones.get(e.id).get(e.idMes);
                  }
                  const fondo = new Fondo(e.name, e.fondo, e.idMes, arrayOp, e.gastado, this.lastOp, e.id);
                  this._fondosMap.set(fondo.id, fondo);
                  this._fondosArray.push(fondo);
                });
                resolve();
              } else {
                this.insertarNuevoRegistro()
              }
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

  private insertarNuevoRegistro() {
    return new Promise<void>((resolve, reject) => {
      this.db.GetUltimoFondo()
        .then((data) => {
          const usuario = this.usuarioServ.Usuario;
          if (data[0]) {

            const ahorros = usuario.ahorro;
            const monto = data[0].fondo;
            const ahorroMasMonto = ahorros + monto;
            this.db.InsertNuevoAhorroHistorico(ahorroMasMonto, this.dateNow, new Date().getFullYear())
              .then(() => {
                this.db.ActualizarAhorros(ahorroMasMonto)
                  .then(() => {
                  });
              });
          }

          const fondo = new FondoSimpl(usuario.fondoName, usuario.montoMes, this.dateNow, 0);
          this.db.InsertarNuevoFondo(fondo).then(() => location.reload());
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

  get fondoId(): number {
    return this._fondoId;
  }
}
