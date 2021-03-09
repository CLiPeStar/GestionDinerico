import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-operaciones-historic',
  templateUrl: './operaciones-historic.page.html',
  styleUrls: ['./operaciones-historic.page.scss'],
})
export class OperacionesHistoricPage implements OnInit {
  private _tituloFondo = 'Mes';
  id: number;

  constructor(private router: Router, private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParamMap.subscribe(() => {
      this.id = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  ngOnInit() {
  }


  get tituloFondo(): string {
    return this._tituloFondo;
  }
}
