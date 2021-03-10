
export class FondoSimpl {
  constructor(private _name: string, private _monto: number, private _idMes: number,
              private _gastado: number) {
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

  get gastado(): number {
    return this._gastado;
  }

}
