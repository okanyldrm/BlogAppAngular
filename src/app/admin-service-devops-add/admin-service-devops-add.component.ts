import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Devops } from '../models/Devops';
import { DevopsService } from '../services/devops.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-admin-service-devops-add',
  templateUrl: './admin-service-devops-add.component.html',
  styleUrls: ['./admin-service-devops-add.component.css']
})
export class AdminServiceDevopsAddComponent implements OnInit {

  constructor(private devopsService:DevopsService , private sweetAlert:Sweetalert2Service,private _location:Location) { }

devops:Devops = new Devops();

  ngOnInit(): void {
  }

  addform(form:NgForm){
    this.devopsService.adddevops(this.devops).subscribe((data)=>{
      this.sweetAlert.fire("Added : "+this.devops.title);
      this._location.back();
    })
  }
 

}
