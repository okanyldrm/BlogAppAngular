import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Devops } from 'src/app/models/Devops';
import { DevopsPage } from 'src/app/models/DevopsPage';
import { DevopsService } from 'src/app/services/devops.service';
import { DevopspageService } from 'src/app/services/devopspage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-devops',
  templateUrl: './admin-service-devops.component.html',
  styleUrls: ['./admin-service-devops.component.css'],
})
export class AdminServiceDevopsComponent implements OnInit {
  constructor(
    private devopspageService: DevopspageService,
    private sweetalert: Sweetalert2Service,
    private devopsService: DevopsService
  ) {}

  devopspage: DevopsPage = new DevopsPage();
  devopses!: Devops[];

  ngOnInit(): void {
    this.devopspageService
      .getdevopspage()
      .subscribe((data) => (this.devopspage = data));
    this.devopsService
      .getalldevops()
      .subscribe((data) => (this.devopses = data));
  }

  updateform(form: NgForm) {
    this.devopspageService
      .updatedevopspage(this.devopspage)
      .subscribe((data) => {
        this.sweetalert.fire('Güncelleme Başarılı');
      });
  }
}
