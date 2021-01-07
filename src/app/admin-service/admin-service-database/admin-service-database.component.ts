import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabasePage } from 'src/app/models/DatabasePage';
import { DatabasepageService } from 'src/app/services/databasepage.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-service-database',
  templateUrl: './admin-service-database.component.html',
  styleUrls: ['./admin-service-database.component.css'],
})
export class AdminServiceDatabaseComponent implements OnInit {
  databasepage: DatabasePage = new DatabasePage();

  constructor(
    private databasepageService: DatabasepageService,
    private sweetalert: Sweetalert2Service
  ) {}

  ngOnInit(): void {
    this.databasepageService
      .getdatabasepage()
      .subscribe((data) => (this.databasepage = data));
  }

  updateFrom(form: NgForm) {
    this.databasepageService.updateForm(this.databasepage).subscribe((data) => {
      this.sweetalert.fire('Güncelleme Başarılı');
    });
  }
}
