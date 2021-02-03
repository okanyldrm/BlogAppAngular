import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Frontend } from 'src/app/models/Frontend';
import { FrontendPage } from 'src/app/models/FrontendPage';
import { FrontendService } from 'src/app/services/frontend.service';
import { FrontendpageService } from 'src/app/services/frontendpage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-frontend',
  templateUrl: './admin-service-frontend.component.html',
  styleUrls: ['./admin-service-frontend.component.css'],
})
export class AdminServiceFrontendComponent implements OnInit {
  frontendPage: FrontendPage = new FrontendPage();
  frontends!: Frontend[];
  frontendName!: string;
  pfrontend: number = 1;
  constructor(
    private frontendPageService: FrontendpageService,
    private frontendService: FrontendService,
    private sweetAlert: Sweetalert2Service
  ) {}

  ngOnInit(): void {
    this.getfrontendpage();
    this.getallfrontend();
  }

  getfrontendpage() {
    this.frontendPageService
      .getfrontendpage()
      .subscribe((data) => (this.frontendPage = data));
  }

  getallfrontend() {
    this.frontendService
      .getallfrontend()
      .subscribe((data) => (this.frontends = data));
  }

  updateFrom(form: NgForm) {
    this.frontendPageService
      .frontendpageupdate(this.frontendPage)
      .subscribe((data) => {
        this.sweetAlert.fire('Updated : Frontend Page ');
      });
  }
  deletefrontend(frontendId: any) {
    this.frontendService.deletefrontend(frontendId).subscribe((data) => {
      this.sweetAlert.toast('Deleted : ' + frontendId, 3000);
      this.getallfrontend();
    });
  }

  SearchFrontend() {
    if (this.frontendName == '') {
      this.ngOnInit();
    } else {
      this.frontends = this.frontends.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.frontendName.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sortbyid(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
