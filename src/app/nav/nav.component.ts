import { Component, OnInit } from '@angular/core';
import { EventCategoryDTO } from '../models/EventCategoryDTO';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private eventService:EventService) { }

  pushmenu=false;
  eventcategoryDto!:EventCategoryDTO[];
  onweekeventcount!:number;


  ngOnInit(): void {
    this.GetWeekEvent();
  }



  GetWeekEvent(){
    this.eventService.getweekevent().subscribe((data)=>{
      this.eventcategoryDto=data;
      this.onweekeventcount=data.length;
    });
  }







}
