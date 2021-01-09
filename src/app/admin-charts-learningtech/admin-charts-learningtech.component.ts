import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-admin-charts-learningtech',
  templateUrl: './admin-charts-learningtech.component.html',
  styleUrls: ['./admin-charts-learningtech.component.css']
})
export class AdminChartsLearningtechComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.chartBarModel();

  }


chartBarModel(){

  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Frontend', 'Backend', 'Database', 'Devops'],
        datasets: [{
            label: 'Learning Chart',
            data: [15, 20, 12, 5],
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
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}



}
