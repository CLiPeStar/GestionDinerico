import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AnotacionesService} from '../../Core/Services/Anotaciones/anotaciones.service';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';
import {Anotaciones} from '../../Core/Class/Anotaciones';
import {Fondo} from '../../Core/Class/Fondo';
import {OperacionSimplificada} from '../../Core/Class/OperacionSimplificada';
import {OperacionesService} from '../../Core/Services/Operaciones/operaciones.service';
import {CardFondosComponent} from '../card-fondos/card-fondos.component';
import {HomePage} from '../../home/home.page';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  private _formGroup: FormGroup;
  private arrayAnotaciones: Anotaciones[];
  private arrayFondos: Fondo[];


  // Variables

  monto: number;
  fondo: number;
  @Input() isSpend: boolean;
  idMes: number;
  concepto: string;
  anotacion: number;


  constructor(private router: Router, private anotacionesServ: AnotacionesService, private fondosServ: FondosService,
              private operacionesServ: OperacionesService, private home: HomePage) {

    this.fondo = null;
    this.monto = null;
    this.idMes = null;
    this.concepto = null;
    this.anotacion = null;
    this.generateFormGroup();
    this.arrayAnotaciones = this.anotacionesServ.Anotaciones;
    this.arrayFondos = this.fondosServ.fondosArray;
    this.idMes = this.fondosServ.dateNow;
  }

  ngOnInit() {
  }

  private generateFormGroup() {
    this._formGroup = new FormGroup({
      monto: new FormControl('', Validators.min(1)),
      anotacion: new FormControl('', Validators.required),
      fondo: new FormControl('', Validators.required),
      concepto: new FormControl('', Validators.required)

    });
  }

  validAll(): boolean {

    if (this.isSpend) {

      return this.formGroup.get('monto').dirty && this.formGroup.get('monto').valid
        && this.formGroup.get('anotacion').dirty && this.formGroup.get('anotacion').dirty
        && this.formGroup.get('fondo').dirty && this.formGroup.get('fondo').dirty
        && this.formGroup.get('concepto').dirty && this.formGroup.get('concepto').dirty;
    }
    return this.formGroup.get('monto').dirty && this.formGroup.get('monto').valid
      && this.formGroup.get('fondo').dirty && this.formGroup.get('fondo').dirty
      && this.formGroup.get('concepto').dirty && this.formGroup.get('concepto').dirty;

  }

  procesarForm() {
    let operacion;
    this.anotacion ? operacion = new OperacionSimplificada(this.monto, this.fondo, this.isSpend, this.idMes, this.concepto, this.anotacion)
      : operacion = new OperacionSimplificada(this.monto, this.fondo, this.isSpend, this.idMes, this.concepto);
    this.operacionesServ.registerNewOperation(operacion)
      .then((data) => {
        this.fondosServ.actualizarSaldos(operacion)
          .then((data2) => {
            this.formGroup.reset();
            this.router.navigate(['/home']).then(() => {
              this.home.generateDatas();
            });
          });
      })
      .catch();


  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}
