import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Backend } from '../models/Backend';
import { BackendService } from '../services/backend.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-backend-add',
  templateUrl: './admin-service-backend-add.component.html',
  styleUrls: ['./admin-service-backend-add.component.css'],
})
export class AdminServiceBackendAddComponent implements OnInit {
  backend: Backend = new Backend();

  constructor(
    private backendService: BackendService,
    private sweetalert: Sweetalert2Service
  ) {}

  ngOnInit(): void {}

  addform(form: NgForm) {
    this.backendService.addBackend(this.backend).subscribe((data) => {
      this.sweetalert.fire('Ekleme Başarılı');
    });
  }
}
