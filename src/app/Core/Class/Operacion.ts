import {Anotaciones} from './Anotaciones';

export class Operacion {
  constructor(private _id: number, private _concepto: string, private _monto: number, private _anotacion: Anotaciones,
              private _fechaOperacion: string, private _isSpend: boolean) {
  }

  get id(): number {
    return this._id;
  }

  get concepto(): string {
    return this._concepto;
  }

  get monto(): number {
    return this._monto;
  }

  get isSpend(): boolean {
    return this._isSpend;
  }


  get anotacion(): Anotaciones {
    return this._anotacion;
  }

  get fechaOperacion(): string {
    return this._fechaOperacion;
  }
}
