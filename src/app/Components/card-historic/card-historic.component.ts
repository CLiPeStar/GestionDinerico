import {Component, Input, OnInit} from '@angular/core';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';
import {Operacion} from '../../Core/Class/Operacion';

@Component({
  selector: 'app-card-historic',
  templateUrl: './card-historic.component.html',
  styleUrls: ['./card-historic.component.scss'],
})
export class CardHistoricComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('idFondo') idFondo: number;

  private _arraysOperation: Operacion[];

  constructor(private fondoServ: FondosService) {
    this._arraysOperation = this.fondoServ.fondosMap.get(2).arrayOperaciones;
  }

  ngOnInit() {
    setTimeout(() => {
      const coll = document.getElementsByClassName('collapsible');
      let i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
          this.classList.toggle('active');
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      }
    }, 1000);

  }

  get arraysOperation(): Operacion[] {
    return this._arraysOperation;
  }
}
