import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-card-fondos',
  templateUrl: './card-fondos.component.html',
  styleUrls: ['./card-fondos.component.scss'],
})
export class CardFondosComponent implements OnInit {

  private bars: any;
  private doughnutChart: any;

  constructor(private route: Router, public act: ActivatedRoute) {
  }

  ngOnInit() {
    this.ionViewDidEnter();
  }

  ionViewDidEnter() {
    this.createBarChart();
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(document.getElementById('barChartCicle'), {
      type: 'doughnut',
      data: {
        labels: ['Salario'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64)',
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)'
          ]

        }]
      }
    });
  }

  createBarChart() {
    this.bars = new Chart(document.getElementById('barChart'), {
      type: 'doughnut',
      data: {
        labels: ['Salario'],
        datasets: [{
          label: 'Viewers in millions',
          data: [1000],
          backgroundColor: ['rgb(38, 194, 129)'],
        }]
      },
      options: {}
    });
  }

  public routerMe() {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
      }
    };
    this.route.navigate(['operaciones-historic'], extrasDeNavegcacion);
  }
}
