import { Component, OnInit } from '@angular/core';
import { FrontendPage } from 'src/app/models/FrontendPage';
import { FrontendpageService } from 'src/app/services/frontendpage.service';

@Component({
  selector: 'app-admin-service-frontend',
  templateUrl: './admin-service-frontend.component.html',
  styleUrls: ['./admin-service-frontend.component.css'],
})
export class AdminServiceFrontendComponent implements OnInit {
  frontendPage: FrontendPage = new FrontendPage();

  constructor(private frontendPageService: FrontendpageService) {}

  ngOnInit(): void {
    this.frontendPageService
      .getfrontendpage()
      .subscribe((data) => (this.frontendPage = data));
  }
}
