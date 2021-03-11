export class DatosMock {

  private objetc = {
    rows: {
      items: [],
      length: 0
    },
    mock: true
  };

  constructor() {

  }

  executeQuery(sql: string) {

    switch (sql) {
      case 'SELECT * FROM operaciones WHERE operaciones.idMes=321':
        return this.getOperaciones();

        break;
      case 'SELECT * FROM fondos WHERE fondos.idMes=321':
        return this.getFondos();
        break;
      case  'SELECT * FROM anotaciones WHERE 1':
        return this.getAnotaciones();

        break;
      case  'SELECT * from recordatorio':
        return this.getRecordatorios();

        break;
      case  'SELECT * from configPerson ':
        return this.getUser();

        break;
      case  'SELECT * FROM historicoAhorros WHERE historicoAhorros.year = 2021':
        return this.getHistoricos();

        break;
      case  'Select * from operaciones\n' +
      '                  WHERE operaciones.idMes=321 and operaciones.fechaOperacion  = (\n' +
      '                                                    SELECT MAX(operaciones.fechaOperacion)\n' +
      '                                                    FROM operaciones\n' +
      ')':
        return this.getLastOp();

        break;

    }
  }

  private getOperaciones() {
    const operaciones = [];

    for (let x = 0; x < 5; x++) {

      operaciones.push({
        id: x, concepto: 'Mock', monto: 300, fondoId: 1, anotacionId: 2, fechaOperacion: new Date()
        , isSpend: true
        , idMes: 321
      });
    }
    this.objetc.rows.length = operaciones.length;
    this.objetc.rows.items = operaciones;
    return this.objetc;
  }

  private getFondos() {
    const fondos = [];

    const fondo = {
      id: 1, name: 'Mock', fondo: 1800, idMes: 321, gastado: 0
    };
    fondos.push(fondo);
    this.objetc.rows.length = fondos.length;
    this.objetc.rows.items = fondos;
    return this.objetc;
  }

  private getAnotaciones() {
    const anotaciones = [{id: 1, name: 'Agua', color: '#6ddccf'}, {id: 2, name: 'Luz', color: '#ffbe0f'}
      , {id: 3, name: 'Ingreso', color: '#a6f0c6'}];


    this.objetc.rows.length = anotaciones.length;
    this.objetc.rows.items = anotaciones;
    return this.objetc;
  }

  private getRecordatorios() {
    const recordatorios = [{id: 1, concepto: 'hola', fechaAviso: new Date().toString(), monto: 200}];


    this.objetc.rows.length = recordatorios.length;
    this.objetc.rows.items = recordatorios;
    return this.objetc;
  }

  private getLastOp() {
    const op = [{
      id: 1, concepto: 'Mock', monto: 300, fondoId: 1, anotacionId: 2, fechaOperacion: new Date()
      , isSpend: true
      , idMes: 321
    }];


    this.objetc.rows.length = op.length;
    this.objetc.rows.items = op;
    return this.objetc;
  }


  private getHistoricos() {
    const historico = [];

    for (let x = 0; x < 5; x++) {

      historico.push({
        id: x, monto: 300, idMes: 321, year: 2021
      });
    }
    this.objetc.rows.length = historico.length;
    this.objetc.rows.items = historico;
    return this.objetc;
  }

  private getUser() {
    const op = [{
      name: 'Mock', fondoName: 'MockMes', montoFondo: 100, idCliente: '#384641Mock', ahorro: 200
    }];


    this.objetc.rows.length = op.length;
    this.objetc.rows.items = op;
    return this.objetc;
  }
}
