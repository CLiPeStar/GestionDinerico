import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  private _formGroup: FormGroup;

  @Input('isSpend') isSpend: boolean;


  //Fase produccion
  arrayAnotaciones = [{name: 'Agua', id: 1}, {name: 'Luz', id: 2}, {name: 'Juegos', id: 3}];
  arrayFondos = [{name: 'Mes', id: 1}, {name: 'Ocio', id: 2}];
  monto: number;
  anotacion: number;
  fondo: number;

  constructor(private router: Router) {
    this.generateFormGroup();
  }

  ngOnInit() {
  }

  private generateFormGroup() {
    this._formGroup = new FormGroup({
      monto: new FormControl('', Validators.min(1)),
      anotacion: new FormControl('', Validators.required),
      fondo: new FormControl('', Validators.required)

    });
  }

  validAll(): boolean {
    return this.formGroup.get('monto').dirty && this.formGroup.get('monto').valid
      && this.formGroup.get('anotacion').dirty && this.formGroup.get('anotacion').dirty
      && this.formGroup.get('fondo').dirty && this.formGroup.get('fondo').dirty;
  }

  procesarForm() {

    console.log(this.monto, this.anotacion, this.fondo, this.isSpend);
    this.formGroup.reset();
    this.router.navigate(['/home']);

  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}
