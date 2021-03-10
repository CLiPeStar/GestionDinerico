import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';

@Injectable({
  providedIn: 'root'
})
export class CopyDataBaseService {
  constructor(private sqlDbCopy: SqliteDbCopy, private platform: Platform) {
  }

  copiarBBDD() {
    return new Promise((resolve, reject) => {
      this.platform.ready()
        .then(() => {
          this.sqlDbCopy
            .copy('EcoPers2.db', 0)
            .then(() => {
              // alert('BD copiada con exito');
              resolve('BD copiada con exito');
            })
            .catch((error) => {
              reject('Error al copiar BD');
            });
        })
        .catch(() => {
          reject('La plataforma no está lista para copiar');
        });

    });

  }
}
