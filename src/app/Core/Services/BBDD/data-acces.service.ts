import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {CopyDataBaseService} from '../copyBBDD/copy-data-base.service';
import {SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Request} from '../../Class/Request';
import {Anotaciones} from '../../Class/Anotaciones';
import {OperacionSimplificada} from '../../Class/OperacionSimplificada';

@Injectable({
  providedIn: 'root'
})
export class DataAccesService {
  private db: SQLiteObject;

  constructor(private plt: Platform, private sqlite: SQLite, private dbCopy: CopyDataBaseService) {
    this.dbCopy.copiarBBDD();
  }

  private getConector() {
    return {
      name: 'EcoPers.db',
      location: 'default',
      createFromLocation: 1,
    };
  }

  private openDB() {
    return new Promise((resolve, reject) => {
      this.plt.ready()
        .then(() => {
          this.sqlite
            .create(this.getConector())
            .then((db: SQLiteObject) => {
              this.db = db;
              resolve('Exito al abrir');
            })
            .catch(() => {
              reject('Fallo al obtener conexión');
            });
        })
        .catch(() => {
          reject('Error el dispositivo no esta listo');
        });
    });

  }

  private requestExecuteSentence() {
    return new Promise<void>((resolve, reject) => {
        let consultable = true;
        if (!this.db) {
          this.openDB()
            .then((resp) => {
              // alert(resp);
              resolve();
            })
            .catch((err) => {
              consultable = false;
              alert(err);
              reject(err);
            });
        } else {
          resolve();
        }

      }
    );
  }


  private executeSentence(request: Request) {
    return new Promise<Array<any>>((resolve, reject) => {

        this.requestExecuteSentence()
          .then(() => {
            this.db
              .executeSql(request.sql, request.searchParams)
              .then((data) => {
                const responseData: Array<any> = [];
                for (let i = 0; i < data.rows.length; i++) {
                  const obj = data.rows.item(i);
                  responseData.push(obj);
                }
                resolve(responseData);

              })
              .catch((e) => {
                reject('fallo al ejecutar sentencia ' + JSON.stringify(e));
              });
          })
          .catch((err) => {
            alert(err);
          });
      }
    );
  }

  // Consultas...

  getHistoricoOperacionesByIdMes(idmes: number) {
    const sql = `SELECT * FROM operaciones WHERE operaciones.idMes=${idmes}`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  getFondoByIdMes(id: number) {
    const sql = `SELECT * FROM fondos WHERE fondos.idMes=${id}`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  getAnotaciones() {
    const sql = `SELECT * FROM anotaciones WHERE 1`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  InsertAnotaciones(anotacion: Anotaciones) {
    console.log(anotacion);
    const sql = `INSERT INTO anotaciones (
                            name,
                            color
                        )
                        VALUES (
                            '${anotacion.name}',
                            '${anotacion.color}'
                        );
`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  InsertOperation(ope: OperacionSimplificada) {
    const sql = `INSERT INTO operaciones (
                            concepto,
                            monto,
                            fondoId,
                            anotacionId,
                            isSpend,
                            idMes
                        )
                        VALUES (
                            '${ope.concepto}',
                            ${ope.monto},
                            ${ope.fondo},
                            ${ope.anotacion ? ope.anotacion : 3},
                            ${ope.isSpend},
                           ${ope.idMes}
                        );

`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  UpdateDataFondo(fondo, gastado, id, idmes) {
    const sql = `UPDATE fondos
                    SET fondo =  ${fondo},
                    gastado =  ${gastado}
                 WHERE id = ${id} AND
                    idMes =  ${idmes}`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  GetLastOp(idMes: number) {
    const sql = `Select * from operaciones
                  WHERE operaciones.idMes=${idMes} and operaciones.fechaOperacion  = (
                                                    SELECT MAX(operaciones.fechaOperacion)
                                                    FROM operaciones
)`;
    const searchParams = [];
    const request: Request = new Request(sql, searchParams);

    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(request)
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }
}
