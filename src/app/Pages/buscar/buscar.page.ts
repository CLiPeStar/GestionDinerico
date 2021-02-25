import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  private _titulo: string = 'Buscar';
  private _page: string = 'Gastos';
  private _formGroup: FormGroup;
  private _isSpend: boolean = true;


  //Fase produccion
  arrayAnotaciones = [{name: 'Agua', id: 1}, {name: 'Luz', id: 2}, {name: 'Juegos', id: 3}];
  arrayFondos = [{name: 'Mes', id: 1}, {name: 'Ocio', id: 2}];
  monto: number = null;
  anotacion: number = null;
  fondo: number = null;
  fechaInicio: Date = null;
  fechaFinal: Date = null;

  constructor(private router: Router) {
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
    console.log(this.monto, this.anotacion, this.fondo, this._isSpend, this.fechaFinal, this.fechaInicio);
    this.formGroup.reset();
  }

  segmentChanged() {
    this._page === 'Gastos' ?
      this._isSpend = true :
      this._page === 'Ingresos' ?
        this._isSpend = false :
        this._isSpend = null;
  }


  //Getter and Setters

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
