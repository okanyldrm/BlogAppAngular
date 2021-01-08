import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AboutPage } from '../models/AboutPage';
import { AboutpageService } from '../services/aboutpage.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css'],
})
export class AdminAboutComponent implements OnInit {
  aboutpage: AboutPage = new AboutPage();
  constructor(
    private aboutpageService: AboutpageService,
    private sweetalet: Sweetalert2Service
  ) {}

  ngOnInit(): void {
    this.aboutpageService
      .getaboutpage()
      .subscribe((data) => (this.aboutpage = data));
  }

  updateform(form:NgForm){
this.aboutpageService.updateaboutpage(this.aboutpage).subscribe((data)=>{
  this.sweetalet.fire("Güncelleme Başarılı");
})
  }
}
