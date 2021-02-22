import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-footer-operation',
  templateUrl: './footer-operation.component.html',
  styleUrls: ['./footer-operation.component.scss'],
})
export class FooterOperationComponent implements OnInit {

  constructor(private router: Router, public act: ActivatedRoute) {
  }

  ngOnInit() {
  }

  routerMe(nameRoute: string) {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate([nameRoute], extrasDeNavegcacion);
  }
}
