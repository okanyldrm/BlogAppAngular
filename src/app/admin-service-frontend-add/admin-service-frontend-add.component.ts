import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Frontend } from '../models/Frontend';
import { FrontendService } from '../services/frontend.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-frontend-add',
  templateUrl: './admin-service-frontend-add.component.html',
  styleUrls: ['./admin-service-frontend-add.component.css'],
})
export class AdminServiceFrontendAddComponent implements OnInit {
  constructor(
    private frontendService: FrontendService,
    private sweetalert: Sweetalert2Service
  ) {}
  frontend: Frontend = new Frontend();

  ngOnInit(): void {}

  addfrontend(form: NgForm) {
    this.frontendService.addfrontend(this.frontend).subscribe((data) => {
      this.sweetalert.fire('Added Frontend : ' + this.frontend.title);
    });
  }
}
