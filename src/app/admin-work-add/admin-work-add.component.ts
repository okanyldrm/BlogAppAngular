import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Work } from '../models/Work';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { WorkService } from '../services/work.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-admin-work-add',
  templateUrl: './admin-work-add.component.html',
  styleUrls: ['./admin-work-add.component.css'],
})
export class AdminWorkAddComponent implements OnInit {
  constructor(private workService:WorkService , private sweetAlert:Sweetalert2Service,private _location:Location) {}
  work: Work = new Work();
  ngOnInit(): void {}

  addform(form: NgForm) {
   this.workService.addwork(this.work).subscribe((data)=>{
     this.sweetAlert.fire("Added : "+this.work.title);
     this._location.back();
   })
  }
}
