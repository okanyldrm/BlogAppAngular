import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent implements OnInit {
  constructor(private router: Router, private eventService: EventService,private authService:AuthService) {}

  eventCount!: number;

  navlink = true;
  activehome = false;
  activeservice = false;
  activework = false;
  activeabout = false;
  activeblog = false;
  activepages = false;
  menuopen = false;
  activehomepage = true;
  activecalendar = false;

  ngOnInit(): void {
    this.eventService.geteventcount().subscribe((data) => {
      this.eventCount = data;
    });
  }

  logout(){
    this.authService.logout();
  }

  isAuth(){
   
    //alert(this.authService.loggedIn())
  }

  activehomef() {
    this.activehome = true;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
    this.activecalendar = false;
    this.activehomepage = false;
  }
  activeservicef() {
    this.activehome = false;
    this.activeservice = true;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
    this.activecalendar = false;
    this.activehomepage = false;
  }
  activeworkf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = true;
    this.activeabout = false;
    this.activeblog = false;
    this.activecalendar = false;
    this.activehomepage = false;
  }
  activeaboutf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = true;
    this.activeblog = false;
    this.activecalendar = false;
    this.activehomepage = false;
  }
  activeblogf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = true;
    this.activecalendar = false;
    this.activehomepage = false;
  }

  activebloglink() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
    this.activepages = false;
    this.activehomepage = true;
    this.activecalendar = false;
  }

  activepagesf() {
  
   
    this.activepages = true;
    this.activehomepage = false;
    this.activecalendar = false;
  }

  activehomepagef() {
    this.activepages = false;
    this.activehomepage = true;
    this.activecalendar = false;
    this.activeabout = false;
    this.activework = false;
    this.activeservice = false;
    this.activeblog = false;
    this.menuopen=false;
  }
  activecalendarf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
    this.activepages = false;
    this.activehomepage = false;
    this.activecalendar = true;

  }
}
