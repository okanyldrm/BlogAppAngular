import { Component, OnInit } from '@angular/core';
import { Frontend } from '../models/Frontend';
import { FrontendPage } from '../models/FrontendPage';
import { FrontendService } from '../services/frontend.service';
import { FrontendpageService } from '../services/frontendpage.service';

@Component({
  selector: 'app-client-service-frontend',
  templateUrl: './client-service-frontend.component.html',
  styleUrls: ['./client-service-frontend.component.css']
})
export class ClientServiceFrontendComponent implements OnInit {

frontendpage:FrontendPage = new FrontendPage();
  frontends!:Frontend[];

  constructor(private frontendService:FrontendService,private frontendpageService:FrontendpageService) { }

  ngOnInit(): void {

    this.frontendService.getallfrontend().subscribe((data)=>this.frontends=data);
    this.frontendpageService.getfrontendpage().subscribe((data)=>this.frontendpage=data);


  }

}
