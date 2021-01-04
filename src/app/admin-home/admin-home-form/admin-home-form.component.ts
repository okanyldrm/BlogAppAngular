import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomePage } from 'src/app/models/HomePage';
import { HomeService } from 'src/app/services/home.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';


@Component({
  selector: 'app-admin-home-form',
  templateUrl: './admin-home-form.component.html',
  styleUrls: ['./admin-home-form.component.css'],
})
export class AdminHomeFormComponent implements OnInit {
  closeResult = '';
  constructor(
    private homeservice: HomeService,
    private sweetalert: Sweetalert2Service,
  
    
  ) {}

  homepage: HomePage = new HomePage();

  ngOnInit(): void {
    this.homeservice.getHomePage().subscribe((data) => (this.homepage = data));
  }

  updateForm(form: NgForm) {
    // console.log(form.value.mainTitle);
    // console.log(form.value.downloads);
    // console.log(form.value.happyClient);
    // console.log(form.value.projectDone);
    // console.log(form.value.hoursSpent);
    // console.log(form.value.title2Content);
    // console.log(form.value.title2);
    // console.log(form.value.titleContent);
    // console.log(form.value.miniTitle);
    // console.log(form.value.title);
   
    this.homeservice.updateHomePage(this.homepage).subscribe((data) => {
      this.sweetalert.fire('Güncelleme Başarılı');
    });
  }

  
}
