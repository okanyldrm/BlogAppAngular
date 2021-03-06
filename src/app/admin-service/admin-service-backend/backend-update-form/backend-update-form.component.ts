import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Backend } from 'src/app/models/Backend';
import { BackendService } from 'src/app/services/backend.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-backend-update-form',
  templateUrl: './backend-update-form.component.html',
  styleUrls: ['./backend-update-form.component.css'],
})
export class BackendUpdateFormComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService,
    private sweetAlert: Sweetalert2Service,
    private router : Router
  ) {}

  backend: Backend = new Backend();
  backends!: Backend[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.backendService
        .getBybackend(params['backendId'])
        .subscribe((data) => (this.backend = data));
    });
  }

  updateform(form: NgForm) {
    this.backendService.updatebackend(this.backend).subscribe((data) => {
      this.sweetAlert.fire('Updated Backend : '+ this.backend.title);
    });
    this.router.navigate(['/admin/service']);
    this.getbackendall();
  }

  getbackendall(){
    this.backendService
    .getbackendall()
    .subscribe((data) => (this.backends = data));
  }
}
