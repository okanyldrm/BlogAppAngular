import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  CalendarOptions,
  EventInput,
  EventInputTransformer,
} from '@fullcalendar/angular';
import { EventM } from '../models/EventM';

import { EventService } from '../services/event.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
declare var $: any;
@Component({
  selector: 'app-admin-fullcalendar',
  templateUrl: './admin-fullcalendar.component.html',
  styleUrls: ['./admin-fullcalendar.component.css'],
})
export class AdminFullcalendarComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private sweeralert: Sweetalert2Service
  ) {}

  eventsMs!: EventM[];
  eventM: EventM = new EventM();

  calendarOptions!: CalendarOptions;
  ngOnInit(): void {
    this.eventService.getallevent().subscribe((data) => {
      this.eventsMs = data;

      this.eventFunction(this.eventsMs);
    });
  }

  eventFunction(events: any) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      // dateClick: this.handleDateClick.bind(this), // bind is important!
      events: events,
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false,
        hour12: false,
      },
    };
  }

  addEvent() {
    $('#exampleModal').modal();
  }

  addEventDb(form: NgForm) {
    this.eventService.addevent(this.eventM).subscribe((data) => {
      $('#exampleModal').modal('hide');
      this.sweeralert.fire('Added Event');
      // window.location.reload();
      //alert(form.value.dateM);
    });
  }
}
