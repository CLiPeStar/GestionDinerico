import {Component, OnInit, Input} from '@angular/core';
import {MenuController} from '@ionic/angular';

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

  constructor(private menuCtrl: MenuController) {
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuCtrl.toggle();

  }
}
