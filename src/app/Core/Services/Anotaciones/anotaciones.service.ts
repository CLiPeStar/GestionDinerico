import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {Anotaciones} from '../../Class/Anotaciones';

@Injectable({
  providedIn: 'root'
})
export class AnotacionesService {
  private _AnotacionesArray: Anotaciones[];
  private _anotacionesMap: Map<number, Anotaciones>;

  constructor(private dataBd: DataAccesService) {
    this._AnotacionesArray = [];
    this._anotacionesMap = new Map<number, Anotaciones>();
    this.generateData();
  }

  private generateData() {
    this.dataBd.getAnotaciones()
      .then((data) => {
        data.forEach((e) => {
          const anot: Anotaciones = new Anotaciones(e.name, e.color, e.id);
          this._anotacionesMap.set(e.id, anot);
          this._AnotacionesArray.push(anot);
        });
      })
      .catch((err) => {
        console.log('Servicio anotaciones:', err);
      });
  }

  public insertNewAnotacion(Anotacion: Anotaciones) {
    this.dataBd.InsertAnotaciones(Anotacion);
    this._AnotacionesArray.push(Anotacion);

  }

  get Anotaciones(): Anotaciones[] {
    return this._AnotacionesArray;
  }

  set Anotaciones(value: Anotaciones[]) {
    this._AnotacionesArray = value;
  }

  get anotacionesMap(): Map<number, Anotaciones> {
    return this._anotacionesMap;
  }
}
