import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {CalendarEvent} from 'angular-calendar';
import {FechaRecordatorio} from '../../Class/FechaRecordatorio';
import {parseISO, startOfDay} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private _arrayEvents: CalendarEvent[];

  constructor(private db: DataAccesService) {
    this.generateData();
  }

   generateData() {
    this._arrayEvents = [];
    return new Promise<void>((resolve, reject) => {
      this.db.getRecordatorios()
        .then((data) => {
          data.forEach((e) => {
            const fecha: FechaRecordatorio = new FechaRecordatorio(e.fechaAviso, e.concepto, e.monto);
            this._arrayEvents.push({
              start: startOfDay(new Date(fecha.fecha)),
              title: `${fecha.concepto} - ${fecha.monto}€`,
            });
          });
          resolve();
        })
        .catch((err) => {
          console.log('Servicio Recordatorio: ' + err);
          reject(err);
        });
    });
  }

  addNewReminder(fecha: FechaRecordatorio) {
    return new Promise<void>((resolve, reject) => {
      this.db.addNewReminder(fecha)
        .then((data) => {
          this.generateData().then(() => resolve());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get arrayEvents(): CalendarEvent[] {
    return this._arrayEvents;
  }
}
