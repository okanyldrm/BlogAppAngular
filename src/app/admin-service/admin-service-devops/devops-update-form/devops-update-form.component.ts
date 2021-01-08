import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Devops } from 'src/app/models/Devops';
import { DevopsService } from 'src/app/services/devops.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-devops-update-form',
  templateUrl: './devops-update-form.component.html',
  styleUrls: ['./devops-update-form.component.css'],
})
export class DevopsUpdateFormComponent implements OnInit {
  constructor(
    private devopsService: DevopsService,
    private activatedRoute: ActivatedRoute,
    private sweetalert: Sweetalert2Service
  ) {}

  devops: Devops = new Devops();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.devopsService
        .getbyiddevops(params['devopsId'])
        .subscribe((data) => (this.devops = data));
    });
  }

  updateform(form: NgForm) {
    this.devopsService.updatedevops(this.devops).subscribe((data) => {
      this.sweetalert.fire('Güncelleme Başarılı');
    });
  }
}
