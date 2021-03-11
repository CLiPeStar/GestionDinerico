import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OperacionSimplificada} from '../../Core/Class/OperacionSimplificada';
import {Usuario} from '../../Core/Class/Usuario';
import {UsuarioService} from '../../Core/Services/Usuario/usuario.service';
import {Router} from '@angular/router';
import {HomePage} from '../../home/home.page';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  private _title: string = 'Registro';
  private _formGroup: FormGroup;


  nombre: string;
  fondoNombre: string;
  fondoMonto: number;
  ahorroMonto: number;


  constructor(private usuarioServ: UsuarioService, private router: Router, private home: HomePage) {
    this.nombre = '';
    this.fondoNombre = '';
    this.fondoMonto = 0;
    this.ahorroMonto = 0;
    this.generateFormGroup();
  }

  ngOnInit() {
  }

  private generateFormGroup() {
    this._formGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      fondoNombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      fondoMonto: new FormControl('', Validators.min(0)),
      ahorroMonto: new FormControl('', Validators.min(0))

    });
  }

  validAll(): boolean {
    return this.formGroup.get('nombre').dirty && this.formGroup.get('nombre').valid
      && this.formGroup.get('fondoNombre').dirty && this.formGroup.get('fondoNombre').dirty
      && this.formGroup.get('fondoMonto').dirty && this.formGroup.get('fondoMonto').dirty
      && this.formGroup.get('ahorroMonto').dirty && this.formGroup.get('ahorroMonto').dirty;
  }

  procesarForm() {
    const usuario = new Usuario(this.nombre, this.fondoNombre, this.fondoMonto, this.ahorroMonto);
    this.usuarioServ.insertUser(usuario).then(() => {
      this.router.navigate(['/home']).then(() => {
        this.home.generateDatas();
      });
    });
  }

  get title(): string {
    return this._title;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}
