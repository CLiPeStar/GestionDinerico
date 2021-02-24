import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  private _titulo: string = 'Buscar';
  private _page: string = 'Gastos';
  private formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {

  }

  private generateForm(){
    this.formGroup= new FormGroup({


      }
    )
  }

  set page(value: string) {
    this._page = value;
  }

  get page() {
    return this._page;
  }

  get titulo(): string {
    return this._titulo;
  }
}
