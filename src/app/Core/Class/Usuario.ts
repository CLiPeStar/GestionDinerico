export class Usuario {


  constructor(private _name: string, private _fondoName: string, private _montoMes: number, private _ahorro: number, private _idCliente?: string) {
  }


  get name(): string {
    return this._name;
  }

  get fondoName(): string {
    return this._fondoName;
  }

  get montoMes(): number {
    return this._montoMes;
  }

  get idCliente(): string {
    return this._idCliente;
  }

  get ahorro(): number {
    return this._ahorro;
  }
}
