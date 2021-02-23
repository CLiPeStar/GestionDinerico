import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router, public act: ActivatedRoute, private navCtrl: NavController) {
  }

  ngOnInit() {

  }


  routerMe(nameRoute: string) {
    this.menuCtrl.toggle();
    const extrasDeNavegcacion: NavigationExtras = {
      state: {}
    };
    this.router.navigate([nameRoute], extrasDeNavegcacion);
  }
}
