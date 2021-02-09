import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartSizeModel } from '../models/ChartSizeModel';
import { GetMonthEventDTO } from '../models/GetMonthEventDTO';
import { ChartModelService } from '../services/chart-model.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-admin-charts-eventweek',
  templateUrl: './admin-charts-eventweek.component.html',
  styleUrls: ['./admin-charts-eventweek.component.css']
})
export class AdminChartsEventweekComponent implements OnInit {

  constructor(private chartmodelService:ChartModelService, private eventService:EventService) { }

  chartsizemodel:ChartSizeModel = new ChartSizeModel();
  getmountdtomodel : GetMonthEventDTO = new GetMonthEventDTO();

  ngOnInit(): void {


     this.eventService.getmonthevent().subscribe((data)=>{
        this.getmountdtomodel =data;
        this.chartBarModel(data.firstWeek,data.secondWeek,data.thirdWeek,data.fourthWeek);
     })
    

  }

  chartBarModel(FirstWeek:any,SecondWeek:any,ThirdWeek:any,ForthWeek:any) {
    var myChart = new Chart('myChart2', {
      type: 'line',
      data: {
        labels: ['FirstWeek', 'SecondWeek', 'ThirdWeek', 'ForthWeek'],
        datasets: [
          {
            label: 'Event Chart',
            data: [FirstWeek, SecondWeek, ThirdWeek, ForthWeek],
            backgroundColor: [
              'rgba(25, 99, 132, 0.2)',
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
