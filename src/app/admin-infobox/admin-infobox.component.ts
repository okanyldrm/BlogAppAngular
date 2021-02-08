import { Component, OnInit } from '@angular/core';
import { EventCategoryDTO } from '../models/EventCategoryDTO';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-admin-infobox',
  templateUrl: './admin-infobox.component.html',
  styleUrls: ['./admin-infobox.component.css']
})
export class AdminInfoboxComponent implements OnInit {
  eventCategoryDto!:EventCategoryDTO[];
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.GetWeekEvent();
  }


  GetWeekEvent(){
    this.eventService.getweekevent().subscribe((data)=>this.eventCategoryDto=data)
   }

}
