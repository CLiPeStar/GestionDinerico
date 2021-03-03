import {Injectable} from '@angular/core';
import {DataAccesService} from '../BBDD/data-acces.service';
import {FiltroBusqueda} from '../../Class/FiltroBusqueda';
import {Operacion} from '../../Class/Operacion';
import {AnotacionesService} from '../Anotaciones/anotaciones.service';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private bd: DataAccesService, private anotacioneservice: AnotacionesService) {
  }

  generateDataBusqueda(busquedaParam: FiltroBusqueda) {
    return new Promise<Operacion[]>((resolve, reject) => {
      this.bd.FiltrarBusqueda(busquedaParam)
        .then((data) => {
          const arrayOperaciones: Operacion[] = [];
          data.forEach((e) => {
            const anot = this.anotacioneservice.anotacionesMap.get(e.anotacionId);
            const operacion: Operacion = new Operacion(e.id, e.concepto, e.monto, anot, e.fechaOperacion, e.isSpend);
            arrayOperaciones.push(operacion);
          });
          resolve(arrayOperaciones);
        });
    });
  }
}
