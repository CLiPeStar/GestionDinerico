import {Component} from '@angular/core';
import {AnotacionesService} from '../Core/Services/Anotaciones/anotaciones.service';
import {FondosService} from '../Core/Services/Fondos/fondos.service';
import {OperacionesService} from '../Core/Services/Operaciones/operaciones.service';
import {Router} from '@angular/router';
import {AhorrosService} from '../Core/Services/Ahorros/ahorros.service';
import {UsuarioService} from '../Core/Services/Usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private anotacionesService: AnotacionesService, private operacionesService: OperacionesService,
              private fondosService: FondosService, private router: Router, private ahorrosServ: AhorrosService,
              private usuario: UsuarioService) {
    this.generateDatas();
  }

  generateDatas() {
    this.usuario.generateData()
      .then((data) => {
        if (data) {
          this.anotacionesService.generateData()
            .then(() => {
              this.operacionesService.generateData()
                .then(() => {
                  this.fondosService.generateData()
                    .then(() => {
                      this.ahorrosServ.generateData()
                        .then(() => {
                          this.router.navigate(['/fondos']);
                        });
                    });
                });
            });
        } else {
          this.router.navigate(['/registrar-usuario']);
        }
      });
  }

}
