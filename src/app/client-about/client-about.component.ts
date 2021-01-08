import { Component, OnInit } from '@angular/core';
import { AboutPage } from '../models/AboutPage';
import { AboutpageService } from '../services/aboutpage.service';

@Component({
  selector: 'app-client-about',
  templateUrl: './client-about.component.html',
  styleUrls: ['./client-about.component.css']
})
export class ClientAboutComponent implements OnInit {

  aboutpage:AboutPage = new AboutPage();
  constructor(private aboutpageService:AboutpageService) { }

  ngOnInit(): void {

      this.aboutpageService.getaboutpage().subscribe((data)=>this.aboutpage=data);

  }

}
