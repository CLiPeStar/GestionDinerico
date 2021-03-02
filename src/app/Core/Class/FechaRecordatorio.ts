export class FechaRecordatorio {
  constructor(private _fecha: string, private _concepto: string, private _monto: number) {
  }


  get fecha(): string {
    return this._fecha;
  }

  get concepto(): string {
    return this._concepto;
  }

  get monto(): number {
    return this._monto;
  }
}
