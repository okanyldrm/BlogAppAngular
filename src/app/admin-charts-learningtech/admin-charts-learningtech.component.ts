import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Backend } from '../models/Backend';
import { ChartSizeModel } from '../models/ChartSizeModel';
import { BackendService } from '../services/backend.service';
import { ChartModelService } from '../services/chart-model.service';

@Component({
  selector: 'app-admin-charts-learningtech',
  templateUrl: './admin-charts-learningtech.component.html',
  styleUrls: ['./admin-charts-learningtech.component.css'],
})
export class AdminChartsLearningtechComponent implements OnInit {
  

  chartsizemodel:ChartSizeModel = new ChartSizeModel();
  constructor(private chartmodelService:ChartModelService) {}

  ngOnInit(): void {
    this.chartmodelService.getchartsize().subscribe((data) => {
     this.chartsizemodel = data;
      this.chartBarModel(data.backendSize,data.frontendSize,data.databaseSize,data.devopsSize);
    });
  }

  // ngOnInit(): void {
  //   this.backendservice.getbackendall().subscribe((data) => {
  //     this.backends = data;
  //     this.backendSize = data.length;
  //     //tekrar et!!
  //     //dinamik veriyi sade subs da yakalıyosun dışarı çıkaramıyosun!!!
  //     this.chartBarModel(this.backendSize);
  //   });
  // }

  chartBarModel(backendsize:any,frontendsize:any,databasesize:any,devopssize:any) {
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Frontend', 'Backend', 'Database', 'Devops'],
        datasets: [
          {
            label: 'Learning Chart',
            data: [frontendsize, backendsize, databasesize, devopssize],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
