import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-historic',
  templateUrl: './card-historic.component.html',
  styleUrls: ['./card-historic.component.scss'],
})
export class CardHistoricComponent implements OnInit {
  private fechaOperacion: string = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

  constructor() {
  }

  ngOnInit() {
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
  }

}
