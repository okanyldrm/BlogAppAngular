import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Backend } from 'src/app/models/Backend';
import { BackendPage } from 'src/app/models/BackendPage';
import { BackendService } from 'src/app/services/backend.service';
import { BackendpageService } from 'src/app/services/backendpage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-backend',
  templateUrl: './admin-service-backend.component.html',
  styleUrls: ['./admin-service-backend.component.css'],
})
export class AdminServiceBackendComponent implements OnInit {
  
  constructor(
    private backendpageService: BackendpageService,
    private backendService: BackendService,
    private sweetalert: Sweetalert2Service
  ) {}
  backendPage: BackendPage = new BackendPage();
  backends!: Backend[];
  backendName!: string;
  pbackend: number = 1;

  ngOnInit(): void {
   this.getbackendpage();
    this.getbackendall();
  }

  getbackendall(){
    this.backendService
    .getbackendall()
    .subscribe((data) => (this.backends = data));
  }

  getbackendpage(){
    this.backendpageService
    .getbackendpage()
    .subscribe((data) => (this.backendPage = data));
  }

  backendpageupdate(form: NgForm) {
    this.backendpageService
      .backendpageupdate(this.backendPage)
      .subscribe((data) => {
        this.sweetalert.fire('Updated : Backend Page');
      });
  }

  backenddelete(id: any) {
    this.backendService.deleteBackend(id).subscribe((data) => {
      this.sweetalert.toast("Deleted ID : "+id,2000);
      this.getbackendall();
    });
  }

  
  SearchBackend() {
    if (this.backendName == '') {
      this.ngOnInit();
    } else {
      this.backends = this.backends.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.backendName.toLocaleLowerCase());
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
