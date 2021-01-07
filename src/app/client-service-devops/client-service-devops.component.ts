import { Component, OnInit } from '@angular/core';
import { DevopsPage } from '../models/DevopsPage';
import { DevopspageService } from '../services/devopspage.service';

@Component({
  selector: 'app-client-service-devops',
  templateUrl: './client-service-devops.component.html',
  styleUrls: ['./client-service-devops.component.css']
})
export class ClientServiceDevopsComponent implements OnInit {

devopspage:DevopsPage = new DevopsPage();

  constructor(private devopspageService:DevopspageService) { }

  ngOnInit(): void {

    this.devopspageService.getdevopspage().subscribe((data)=>this.devopspage=data);
  }

}
