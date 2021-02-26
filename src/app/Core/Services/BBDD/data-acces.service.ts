import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SQLite} from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataAccesService {

  constructor(private plt: Platform, private sqlite: SQLite) {
  }
}
