import { Component, OnInit } from '@angular/core';
import { Frontend } from '../models/Frontend';
import { FrontendService } from '../services/frontend.service';

@Component({
  selector: 'app-client-service-frontend',
  templateUrl: './client-service-frontend.component.html',
  styleUrls: ['./client-service-frontend.component.css']
})
export class ClientServiceFrontendComponent implements OnInit {


  frontends!:Frontend[];

  constructor(private frontendService:FrontendService) { }

  ngOnInit(): void {

    this.frontendService.getallfrontend().subscribe((data)=>this.frontends=data);



  }

}
