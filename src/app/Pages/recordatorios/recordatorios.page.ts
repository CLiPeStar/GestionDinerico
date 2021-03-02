import {Component, OnInit} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';

import {CalendarEvent, CalendarView} from 'angular-calendar';
import {parseISO, startOfDay} from 'date-fns';
import {FechaRecordatorio} from '../../Core/Class/FechaRecordatorio';
import {RecordatorioService} from '../../Core/Services/Recordatorio/recordatorio.service';


@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {
  // tslint:disable-next-line:variable-name
  private _titulo = 'Recordatorios';

  private meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  locale = 'es';
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;


  events: CalendarEvent[] = [];

  constructor(private  alertController: AlertController, private RecordatoriosServices: RecordatorioService) {
    this.events = this.RecordatoriosServices.arrayEvents;
  }


  ngOnInit() {

  }

  async dayClicked({date, events}: { date: Date; events: CalendarEvent[] }) {
    let mensaje = '';
    events.forEach(e => {
      mensaje += `<p class="text-bold text-white">- ${e.title}</p>`;
    });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recordatorio!!',
      message: mensaje,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Añadir recordatorio',
      inputs: [
        {
          name: 'fecha',
          type: 'date',
          value: new Date()
        },
        {
          name: 'concepto',
          type: 'text',
          placeholder: 'Concepto',
          value: 'Pago'
        }
        ,
        {
          name: 'monto',
          type: 'number',
          placeholder: 'Cuantia',
          value: 1
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

        }, {
          text: 'Ok',
          handler: (data) => {

            const fecha = new FechaRecordatorio(String(new Date(data.fecha)), data.concepto, data.monto);
            this.RecordatoriosServices.addNewReminder(fecha)
              .then(() => {
                this.events = this.RecordatoriosServices.arrayEvents;

              });

          }
        }
      ]
    });
    await alerta.present();

  }

  get titulo(): string {
    return this._titulo;
  }
}
