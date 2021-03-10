export class Ahorros {
  constructor(private _monto: number, private _idMes: number) {
  }

  get monto(): number {
    return this._monto;
  }

  get idMes(): number {
    return this._idMes;
  }
}
