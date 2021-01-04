import { Component, OnInit } from '@angular/core';
import { HomePage } from '../models/HomePage';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.css']
})
export class ClientNavComponent implements OnInit {
  homeactive = false;
  serviceactive=false;
  workactive=false;
  aboutactive=false;
  blogactive=false;
  contactactive=false;
  homepage= new HomePage();
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.homeservice.getHomePage().subscribe((data) => (this.homepage = data));
  }

  homeactivef(){
    this.homeactive=true;
    this.serviceactive=false;
    this.workactive=false;
    this.aboutactive=false;
    this.blogactive=false;
    this.contactactive=false;
  }
  serviceactivef(){
    this.homeactive=false;
    this.serviceactive=true;
    this.workactive=false;
    this.aboutactive=false;
    this.blogactive=false;
    this.contactactive=false;
  }
  workactivef(){
    this.homeactive=false;
    this.serviceactive=false;
    this.workactive=true;
    this.aboutactive=false;
    this.blogactive=false;
    this.contactactive=false;
  }
  aboutactivef(){
    this.homeactive=false;
    this.serviceactive=false;
    this.workactive=false;
    this.aboutactive=true;
    this.blogactive=false;
    this.contactactive=false;
  }
  blogactivef(){
    this.homeactive=false;
    this.serviceactive=false;
    this.workactive=false;
    this.aboutactive=false;
    this.blogactive=true;
    this.contactactive=false;
  }
  contactactivef(){
    this.homeactive=false;
    this.serviceactive=false;
    this.workactive=false;
    this.aboutactive=false;
    this.blogactive=false;
    this.contactactive=true;
  }

}
