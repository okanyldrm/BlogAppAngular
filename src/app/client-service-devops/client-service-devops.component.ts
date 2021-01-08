import { Component, OnInit } from '@angular/core';
import { Devops } from '../models/Devops';
import { DevopsPage } from '../models/DevopsPage';
import { DevopsService } from '../services/devops.service';
import { DevopspageService } from '../services/devopspage.service';

@Component({
  selector: 'app-client-service-devops',
  templateUrl: './client-service-devops.component.html',
  styleUrls: ['./client-service-devops.component.css']
})
export class ClientServiceDevopsComponent implements OnInit {

devopspage:DevopsPage = new DevopsPage();
devopses!: Devops[];

  constructor(private devopspageService:DevopspageService,private devopsService:DevopsService) { }

  ngOnInit(): void {

    this.devopspageService.getdevopspage().subscribe((data)=>this.devopspage=data);
    this.devopsService.getalldevops().subscribe((data)=>this.devopses=data);
  }

}
