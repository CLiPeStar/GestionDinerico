export class FiltroBusqueda {
  constructor(private _monto?: number, private _anotacionId?: number,
              private _fondoId?: number, private _isSpend?: boolean, private _fechaIni?: Date, private _fechaFin?: Date) {
  }

  get monto(): number {
    return this._monto;
  }

  get anotacionId(): number {
    return this._anotacionId;
  }

  get fondoId(): number {
    return this._fondoId;
  }

  get fechaIni(): Date {
    return this._fechaIni;
  }

  get fechaFin(): Date {
    return this._fechaFin;
  }

  get isSpend(): boolean {
    return this._isSpend;
  }
}
