import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OperacionSimplificada} from '../../Core/Class/OperacionSimplificada';
import {Usuario} from '../../Core/Class/Usuario';
import {UsuarioService} from '../../Core/Services/Usuario/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePage} from '../../home/home.page';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  private _title: string = 'Registro';
  private _formGroup: FormGroup;
  private usuario: Usuario;
  private isUpdate: boolean;

  nombre: string;
  fondoNombre: string;
  fondoMonto: number;
  ahorroMonto: number;


  constructor(private usuarioServ: UsuarioService, private router: Router, private home: HomePage, private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParamMap.subscribe(() => {
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      this.isUpdate = this.router.getCurrentNavigation().extras.state.update;
      if (this.usuario) {
        this.nombre = this.usuario.name;
        this.fondoNombre = this.usuario.fondoName;
        this.fondoMonto = this.usuario.montoMes;
        this.ahorroMonto = this.usuario.ahorro;
      } else {
        this.nombre = '';
        this.fondoNombre = '';
        this.fondoMonto = 0;
        this.ahorroMonto = 0;
      }
      this.generateFormGroup();
    });
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
    if (this.isUpdate) {
      return this.formGroup.get('nombre').valid
        && this.formGroup.get('fondoNombre').valid
        && this.formGroup.get('fondoMonto').valid
        && this.formGroup.get('ahorroMonto').valid;
    } else {
      return this.formGroup.get('nombre').dirty && this.formGroup.get('nombre').valid
        && this.formGroup.get('fondoNombre').dirty && this.formGroup.get('fondoNombre').valid
        && this.formGroup.get('fondoMonto').dirty && this.formGroup.get('fondoMonto').valid
        && this.formGroup.get('ahorroMonto').dirty && this.formGroup.get('ahorroMonto').valid;
    }

  }

  procesarForm() {
    const usuario = new Usuario(this.nombre, this.fondoNombre, this.fondoMonto, this.ahorroMonto);
    if (!this.isUpdate) {
      this.usuarioServ.insertUser(usuario).then(() => {
        this.router.navigate(['/home']).then(() => {
          this.home.generateDatas();
        });
      });
    } else {
      this.usuarioServ.updateUser(usuario).then(() => {
        this.router.navigate(['/home']).then(() => {
          this.home.generateDatas();
        });
      });
    }

  }

  get title(): string {
    return this._title;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}
