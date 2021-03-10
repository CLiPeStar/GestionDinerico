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
    // this.generateData();
  }

   generateData() {
    return new Promise<any>((resolve, reject) => {
      this.dataBd.getAnotaciones()
        .then((data) => {
          this._AnotacionesArray = [];
          this._anotacionesMap = new Map<number, Anotaciones>();
          data.forEach((e) => {
            const IdIngreso: number = 3;
            const anot: Anotaciones = new Anotaciones(e.name, e.color, e.id);
            if (e.id !== IdIngreso) {

              this._AnotacionesArray.push(anot);

            }
            this._anotacionesMap.set(e.id, anot);
          });
          resolve();
        })
        .catch((err) => {
          console.log('Servicio anotaciones:', err);
          reject(err);
        });
    });

  }


  public insertNewAnotacion(Anotacion: Anotaciones) {
    return new Promise<void>((resolve, reject) => {
      this.dataBd.InsertAnotaciones(Anotacion)
        .then((data) => {
          this.generateData().then(() => resolve());
        })
        .catch((err) => reject(err));
    });

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
