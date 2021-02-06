import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  CalendarOptions,
  EventInput,
  EventInputTransformer,
} from '@fullcalendar/angular';
import { Subject, Timestamp } from 'rxjs';
import { EventM } from '../models/EventM';
import { EventService } from '../services/event.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { Time } from '@angular/common';
import { Location } from '@angular/common';
import { codefirstDTO } from '../models/codefirstDTO';
import { EventCategory } from '../models/EventCategory';
declare var $: any;
@Component({
  selector: 'app-admin-fullcalendar',
  templateUrl: './admin-fullcalendar.component.html',
  styleUrls: ['./admin-fullcalendar.component.css'],
})
export class AdminFullcalendarComponent implements OnInit {
  eventsMs!: EventM[];
  eventM: EventM = new EventM();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  calendarOptions!: CalendarOptions;
  codefirstDTOs!: codefirstDTO[]; 

  constructor(
    private eventService: EventService,
    private sweeralert: Sweetalert2Service,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.dataTableOption();
    this.eventService.getallevent().subscribe((data) => {
      this.eventsMs = data;
      console.log(this.eventsMs);
      data.forEach(item=>{
        this.eventM.eventCategory=item.eventCategory
      })
      this.dtTrigger.next();
      this.eventFunction(this.eventsMs);
    });


    //codefirstDTO
    // this.eventService.getcategoryevent().subscribe((data)=>{
    //   this.codefirstDTOs=data;
    //   data.forEach(item => {
    //     console.log(item)
    //   });
     
    // });
    
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
    //alert(form.value.timeM);
    this.eventService.addevent(this.eventM).subscribe((data) => {
      $('#exampleModal').modal('hide');
      this.sweeralert.fire('Added Event');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  dataTableOption() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  deleteEvent(id: any) {
    this.eventService.deleteevent(id).subscribe((data) => {
      this.sweeralert.toast('Deletion Successful', 2900);

      setTimeout(() => {
         window.location.reload();
      }, 3000);
    });
  }

getcategoryevent(){
  this.eventService.getcategoryevent().subscribe((data)=>{
    this.codefirstDTOs=data;
  });
}


}
