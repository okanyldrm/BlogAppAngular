import { Component, OnInit } from '@angular/core';
import { Frontend } from 'src/app/models/Frontend';
import { FrontendPage } from 'src/app/models/FrontendPage';
import { FrontendService } from 'src/app/services/frontend.service';
import { FrontendpageService } from 'src/app/services/frontendpage.service';

@Component({
  selector: 'app-admin-service-frontend',
  templateUrl: './admin-service-frontend.component.html',
  styleUrls: ['./admin-service-frontend.component.css'],
})
export class AdminServiceFrontendComponent implements OnInit {
  frontendPage: FrontendPage = new FrontendPage();
  frontends!: Frontend[];
  constructor(
    private frontendPageService: FrontendpageService,
    private frontendService: FrontendService
  ) {}

  ngOnInit(): void {
    this.frontendPageService
      .getfrontendpage()
      .subscribe((data) => (this.frontendPage = data));

    this.frontendService
      .getallfrontend()
      .subscribe((data) => (this.frontends = data));
  }
}
