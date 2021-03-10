import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';

@Component({
  selector: 'app-operaciones-historic',
  templateUrl: './operaciones-historic.page.html',
  styleUrls: ['./operaciones-historic.page.scss'],
})
export class OperacionesHistoricPage implements OnInit {
  private _tituloFondo;
  id: number;

  constructor(private router: Router, private rutaActivada: ActivatedRoute, private fondos: FondosService) {
    this.rutaActivada.queryParamMap.subscribe(() => {
      this.id = this.router.getCurrentNavigation().extras.state.id;
      this._tituloFondo = this.fondos.fondosMap.get(this.id).name;
    });
  }

  ngOnInit() {
  }


  get tituloFondo(): string {
    return this._tituloFondo;
  }
}
