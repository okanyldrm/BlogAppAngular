import { Component, OnInit } from '@angular/core';
import { Backend } from '../models/Backend';
import { BackendPage } from '../models/BackendPage';
import { BackendService } from '../services/backend.service';
import { BackendpageService } from '../services/backendpage.service';

@Component({
  selector: 'app-client-service-backend',
  templateUrl: './client-service-backend.component.html',
  styleUrls: ['./client-service-backend.component.css'],
})
export class ClientServiceBackendComponent implements OnInit {
  backends!: Backend[];
  backendpage:BackendPage = new BackendPage();

  constructor(private backendService: BackendService, private backendPageService:BackendpageService) {}

  ngOnInit(): void {
    this.backendService
      .getbackendall()
      .subscribe((data) => (this.backends = data));
      this.backendPageService.getbackendpage().subscribe((data)=>this.backendpage=data);
  }
}
