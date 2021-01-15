import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Frontend } from 'src/app/models/Frontend';
import { FrontendService } from 'src/app/services/frontend.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-frontend-update-form',
  templateUrl: './frontend-update-form.component.html',
  styleUrls: ['./frontend-update-form.component.css'],
})
export class FrontendUpdateFormComponent implements OnInit {
  constructor(
    private frontendService: FrontendService,
    private activated: ActivatedRoute,
    private sweetAlert: Sweetalert2Service,
    private _location:Location
  ) {}
  frontend: Frontend = new Frontend();
  ngOnInit(): void {
    this.activated.params.subscribe((params) => {
      this.frontendService
        .geybyidfrontend(params['frontendId'])
        .subscribe((data) => (this.frontend = data));
    });
  }

  updateForm(form: NgForm) {
    this.frontendService.updatefrontend(this.frontend).subscribe((data) => {
      this.sweetAlert.fire('Updated : '+ this.frontend.title);
      this._location.back();
    });
  }
}
