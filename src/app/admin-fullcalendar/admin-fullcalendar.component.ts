import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-admin-fullcalendar',
  templateUrl: './admin-fullcalendar.component.html',
  styleUrls: ['./admin-fullcalendar.component.css'],
})
export class AdminFullcalendarComponent implements OnInit {

  

  constructor() {
   
   }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Toplantı', date: '2021-01-05T10:30:00', color:"red"},
      { title: 'Halı Saha', date: '2021-01-07T22:30:00', color:"green"}
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
}
}
