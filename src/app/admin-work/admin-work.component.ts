import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkPage } from '../models/WorkPage';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { WorkpageService } from '../services/workpage.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {

  workpage:WorkPage = new WorkPage();
  constructor(private workpageService:WorkpageService, private sweetAlert: Sweetalert2Service) { }

  ngOnInit(): void {

    this.workpageService.getworkpage().subscribe((data)=>this.workpage=data);

  }

  updateform(form:NgForm){
this.workpageService.updateworkpage(this.workpage).subscribe((data)=>{
this.sweetAlert.fire("Güncelleme Başarılı")
})
  }

}
