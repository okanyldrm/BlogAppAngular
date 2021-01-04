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
  backendPage: BackendPage = new BackendPage();
  backends!: Backend[];

  constructor(private backendpageService: BackendpageService,private backendService:BackendService, private sweetalert:Sweetalert2Service) {}

  ngOnInit(): void {
    this.backendpageService
      .getbackendpage()
      .subscribe((data) => (this.backendPage = data));
      this.backendService.getbackendall().subscribe((data)=>this.backends=data);
  }

backendpageupdate(form:NgForm){
this.backendpageService.backendpageupdate(this.backendPage).subscribe((data)=>{
this.sweetalert.fire("Güncelleme Başarılı");
});
}


}
