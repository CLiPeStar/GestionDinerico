import {Operacion} from './Operacion';

export class Fondo {
  constructor(private _name: string, private _monto: number, private _idMes: number, private _arrayOperaciones: Operacion[],
              private _gastado: number, private _ultimaOp: Operacion, private _id?: number) {
  }

  get name(): string {
    return this._name;
  }

  get monto(): number {
    return this._monto;
  }

  get idMes(): number {
    return this._idMes;
  }

  get id(): number {
    return this._id;
  }

  get arrayOperaciones(): Operacion[] {
    return this._arrayOperaciones;
  }

  get gastado(): number {
    return this._gastado;
  }

  get ultimaOp(): Operacion {
    return this._ultimaOp;
  }
}
