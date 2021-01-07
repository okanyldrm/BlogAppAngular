import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DevopsPage } from 'src/app/models/DevopsPage';
import { DevopspageService } from 'src/app/services/devopspage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-devops',
  templateUrl: './admin-service-devops.component.html',
  styleUrls: ['./admin-service-devops.component.css']
})
export class AdminServiceDevopsComponent implements OnInit {

  constructor(private devopspageService:DevopspageService, private sweetalert:Sweetalert2Service) { }

  devopspage:DevopsPage = new DevopsPage();

  ngOnInit(): void {

  this.devopspageService.getdevopspage().subscribe((data)=>this.devopspage=data);




  }

  updateform(form:NgForm){
    this.devopspageService.updatedevopspage(this.devopspage).subscribe((data)=>{
      this.sweetalert.fire("Güncelleme Başarılı");
    })
  }

}
