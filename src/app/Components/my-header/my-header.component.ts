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
  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  // tslint:disable-next-line:no-input-rename
  @Input('menu') menu: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('state') state: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('idFondo') idFondo: number;

  private fondo: Fondo;

  constructor(private menuCtrl: MenuController, private fondosServ: FondosService) {
    this.fondo = this.fondosServ.fondosMap.get(2);
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuCtrl.toggle();

  }

}
