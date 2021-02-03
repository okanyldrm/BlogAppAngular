import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Work } from '../models/Work';
import { WorkPage } from '../models/WorkPage';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { WorkService } from '../services/work.service';
import { WorkpageService } from '../services/workpage.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css'],
})
export class AdminWorkComponent implements OnInit {
  workpage: WorkPage = new WorkPage();
  works!: Work[];
  workName!: string;
  pwork: number = 1;
  constructor(
    private workpageService: WorkpageService,
    private sweetAlert: Sweetalert2Service,
    private workservice: WorkService
  ) {}

  ngOnInit(): void {
   this.getworkpage();
   this.getallwork();
  }


  getworkpage(){
    this.workpageService
    .getworkpage()
    .subscribe((data) => (this.workpage = data));
  }

  getallwork(){
    this.workservice.getallwork().subscribe((data) => (this.works = data));
  }

  updateform(form: NgForm) {
    this.workpageService.updateworkpage(this.workpage).subscribe((data) => {
      this.sweetAlert.fire('Güncelleme Başarılı');
    });
  }

  deletework(workId: any) {
    this.workservice.deletework(workId).subscribe((data) => {
      
      this.sweetAlert.toast('Deleted : ' + workId, 3000);
      this.getallwork();
    });
  }

  SearchWork() {
    if (this.workName == '') {
      this.ngOnInit();
    } else {
      this.works = this.works.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.workName.toLocaleLowerCase());
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
