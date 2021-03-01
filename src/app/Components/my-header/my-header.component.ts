import {Component, OnInit, Input} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {FondosService} from '../../Core/Services/Fondos/fondos.service';
import {Fondo} from '../../Core/Class/Fondo';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() menu: boolean;
  @Input() state: boolean;
  @Input() idFondo: number;

  private fondo: Fondo = null;

  constructor(private menuCtrl: MenuController, private fondosServ: FondosService) {
  }

  ngOnInit() {
    this.fondo = this.fondosServ.fondosMap.get(this.idFondo);
  }

  toggleMenu() {
    this.menuCtrl.toggle();

  }

}
