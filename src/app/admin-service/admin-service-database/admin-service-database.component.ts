import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database } from 'src/app/models/Database';
import { DatabasePage } from 'src/app/models/DatabasePage';
import { DatabaseService } from 'src/app/services/database.service';
import { DatabasepageService } from 'src/app/services/databasepage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-database',
  templateUrl: './admin-service-database.component.html',
  styleUrls: ['./admin-service-database.component.css'],
})
export class AdminServiceDatabaseComponent implements OnInit {
  databasepage: DatabasePage = new DatabasePage();
  databases!: Database[];

  constructor(
    private databasepageService: DatabasepageService,
    private sweetalert: Sweetalert2Service,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.databasepageService
      .getdatabasepage()
      .subscribe((data) => (this.databasepage = data));

    this.databaseService
      .getalldatabase()
      .subscribe((data) => (this.databases = data));
  }

  updateFrom(form: NgForm) {
    this.databasepageService.updateForm(this.databasepage).subscribe((data) => {
      this.sweetalert.fire('Güncelleme Başarılı');
    });
  }
  deleteatabase(databaseId:any){
this.databaseService.deletedatabase(databaseId).subscribe((data)=>{
  setTimeout(() => {
    window.location.reload();
  }, 2995);

  this.sweetalert.toast("Deleted ID : "+databaseId,3000);
})
  }
}
