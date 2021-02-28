export class Anotaciones {

  constructor(private _name: string, private _color: string, private _id?: number) {

  }


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get color(): string {
    return this._color;
  }
}
