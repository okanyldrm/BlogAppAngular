import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import { EventM } from '../models/EventM';

import { EventService } from '../services/event.service';

@Component({
  selector: 'app-admin-fullcalendar',
  templateUrl: './admin-fullcalendar.component.html',
  styleUrls: ['./admin-fullcalendar.component.css'],
})
export class AdminFullcalendarComponent implements OnInit {

  

  constructor(private eventService:EventService) {}

  eventsM!:EventM[];

  eventsM2:EventInput[]=[
     { title: 'Toplantı', date: '2021-01-05T10:30:00', color:"red"},
     { title: 'Halı Saha', date: '2021-01-07T22:30:00', color:"green"}
  ];



  ngOnInit(): void {
   this.eventService.getallevent().subscribe((data)=>this.eventsM=data)
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!

    events: this.eventsM2
  };
  handleDateClick(arg:any) {
    alert('Date : ' + arg.dateStr)
}
}
