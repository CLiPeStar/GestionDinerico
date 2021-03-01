import {Component, OnInit} from '@angular/core';
import {Anotaciones} from '../../Core/Class/Anotaciones';
import {AnotacionesService} from '../../Core/Services/Anotaciones/anotaciones.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.page.html',
  styleUrls: ['./anotaciones.page.scss'],
})
export class AnotacionesPage implements OnInit {
  private _titulo: string = 'Anotaciones';
  private arrayAnotaciones: Anotaciones[] = [];


  constructor(private anotacionesService: AnotacionesService, private alertController: AlertController) {
    this.arrayAnotaciones = this.anotacionesService.Anotaciones;
  }

  ngOnInit() {

  }

  async anadirNuevaAnotacion() {

    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Añadir anotacion',
      inputs: [
        {
          name: 'Name',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: 'Color',
          // @ts-ignore
          type: 'color',
          value: '#025955'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

        }, {
          text: 'Ok',
          handler: (data) => {
            const anotacion = new Anotaciones(data.Name, data.Color);
            console.log(anotacion);
            this.anotacionesService.insertNewAnotacion(anotacion).then(() => {
                this.arrayAnotaciones = this.anotacionesService.Anotaciones;
              }
            );
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
