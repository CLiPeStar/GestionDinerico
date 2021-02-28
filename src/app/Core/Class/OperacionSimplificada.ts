export class OperacionSimplificada {
  constructor(private _monto: number, private _fondo: number, private _isSpend, private _idMes: number,
              private _concepto: string, private _anotacion?: number) {
  }

  get monto(): number {
    return this._monto;
  }

  get fondo(): number {
    return this._fondo;
  }

  get isSpend() {
    return this._isSpend;
  }

  get idMes(): number {
    return this._idMes;
  }

  get concepto(): string {
    return this._concepto;
  }

  get anotacion(): number {
    return this._anotacion;
  }
}
