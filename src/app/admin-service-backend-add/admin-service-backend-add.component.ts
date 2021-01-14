import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Backend } from '../models/Backend';
import { BackendService } from '../services/backend.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-service-backend-add',
  templateUrl: './admin-service-backend-add.component.html',
  styleUrls: ['./admin-service-backend-add.component.css'],
})
export class AdminServiceBackendAddComponent implements OnInit {
  backend: Backend = new Backend();

  constructor(
    private backendService: BackendService,
    private sweetalert: Sweetalert2Service,
    private _location:Location
  ) {}

  ngOnInit(): void {}

  addform(form: NgForm) {
    this.backendService.addBackend(this.backend).subscribe((data) => {
      this.sweetalert.fire('Added Backend : '+this.backend.title);
      this._location.back();
    });
  }
}
