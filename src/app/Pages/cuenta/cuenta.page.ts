import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {AhorrosService} from '../../Core/Services/Ahorros/ahorros.service';
import {Ahorros} from '../../Core/Class/ahorros';
import {Usuario} from '../../Core/Class/Usuario';
import {UsuarioService} from '../../Core/Services/Usuario/usuario.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  private _titulo: string = 'Cuenta';
  public chart: any = null;
  private _Usuario: Usuario = null;

  constructor(private ahorrosServ: AhorrosService, private usuarioServ: UsuarioService, private router: Router) {
    this._Usuario = this.usuarioServ.Usuario;
  }

  ngOnInit() {
    this.generateCharts();
  }


  generateCharts() {
    const arrayAhorros = this.ahorrosServ.ahorros;
    const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dataMonto = [];
    arrayAhorros.forEach((x) => {
      let part;
      if (String(x.idMes).length === 3) {
        part = String(x.idMes).substr(0, 1);
      } else {
        part = String(x.idMes).substr(0, 2);
      }
      dataMonto[part] = x.monto;
    });
    for (let i = 0; i < arrayMeses.length; i++) {
      if (!dataMonto[i]) {
        dataMonto[i] = 0;
      }
      console.log(dataMonto);
      this.chart = new Chart('realtime', {
        type: 'bar',
        data: {
          labels: arrayMeses,
          datasets: [{
            label: 'Ahorro',
            data: dataMonto,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(22, 202, 33, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgb(65,232,28, 0.8)',
              'rgb(97,13,183, 0.8)',
              'rgb(19,37,205, 0.8)',
              'rgb(210,13,143,0.8)',
              'rgb(62,195,131, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(22, 202, 33, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(65,232,28, 1)',
              'rgba(97,13,183, 1)',
              'rgba(19,37,205, 1)',
              'rgba(210,13,143, 1)',
              'rgba(62,195,131, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }

  get titulo(): string {
    return this._titulo;
  }


  get Usuario(): Usuario {
    return this._Usuario;
  }

  routerMe() {
    const extras: NavigationExtras = {
      state: {
        usuario: this.Usuario,
        update: true,
      }
    };
    this.router.navigate(['/registrar-usuario'], extras);
  }
}
