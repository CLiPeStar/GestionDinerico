import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';
import {AnotacionesService} from '../../Core/Services/Anotaciones/anotaciones.service';
import {Anotaciones} from '../../Core/Class/Anotaciones';
import {Fondo} from '../../Core/Class/Fondo';
import {BusquedaService} from '../../Core/Services/Busqueda/busqueda.service';
import {FiltroBusqueda} from '../../Core/Class/FiltroBusqueda';
import {Operacion} from '../../Core/Class/Operacion';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  private _arraysOperation: Operacion[];
  private _titulo: string = 'Buscar';
  private _page: string = 'Gastos';
  private _formGroup: FormGroup;
  private _isSpend: boolean = true;
  private _arrayAnotaciones: Anotaciones[];
  private _arrayFondos: Fondo[];


  //Fase produccion
  monto: number = null;
  anotacion: number = null;
  fondo: number = null;
  fechaInicio: Date = null;
  fechaFinal: Date = null;

  constructor(private router: Router, private fondosService: FondosService, private anotacionesService: AnotacionesService,
              private busquedaService: BusquedaService) {
    this._arrayFondos = this.fondosService.fondosArray;
    this._arrayAnotaciones = this.anotacionesService.Anotaciones;
    this.generateFormGroup();
  }

  ngOnInit() {
  }

  private generateFormGroup() {
    this._formGroup = new FormGroup({
      monto: new FormControl('', Validators.min(1)),
      anotacion: new FormControl('', null),
      fondo: new FormControl('', null),
      fechaInicio: new FormControl('', null),
      fechaFinal: new FormControl('', null),
    });
  }

  procesarForm() {
    const busqueda = new FiltroBusqueda(this.monto, this.anotacion, this.fondo, this._isSpend, this.fechaInicio, this.fechaFinal);
    this.busquedaService.generateDataBusqueda(busqueda).then((data) => {
      console.log(data);
      this._arraysOperation = data;
      this.formGroup.reset();
    });

  }

  segmentChanged() {
    this._page === 'Gastos' ?
      this._isSpend = true :
      this._page === 'Ingresos' ?
        this._isSpend = false :
        this._isSpend = null;
  }


  // Getter and Setters


  get arraysOperation(): Operacion[] {
    return this._arraysOperation;
  }

  get arrayAnotaciones(): Anotaciones[] {
    return this._arrayAnotaciones;
  }

  get arrayFondos(): Fondo[] {
    return this._arrayFondos;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  set page(value: string) {
    this._page = value;
  }

  get page() {
    return this._page;
  }

  get isSpend(): boolean {
    return this._isSpend;
  }

  set isSpend(value: boolean) {
    this._isSpend = value;
  }

  get titulo(): string {
    return this._titulo;
  }
}
