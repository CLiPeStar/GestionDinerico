import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.page.html',
  styleUrls: ['./balances.page.scss'],
})
export class BalancesPage implements OnInit {
  private _titulo: string = 'Balances';

  constructor() {
  }

  ngOnInit() {
  }

  get titulo(): string {
    return this._titulo;
  }
}
