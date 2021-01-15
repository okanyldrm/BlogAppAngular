import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Database } from '../models/Database';
import { DatabaseService } from '../services/database.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-service-database-add',
  templateUrl: './admin-service-database-add.component.html',
  styleUrls: ['./admin-service-database-add.component.css'],
})
export class AdminServiceDatabaseAddComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private _sweetAlert: Sweetalert2Service,
    private _location:Location
  ) {}
  database: Database = new Database();
  ngOnInit(): void {}

  addform(form: NgForm) {
    this.databaseService.adddatabase(this.database).subscribe((data) => {
      this._sweetAlert.fire('Added : ' + this.database.title);
      this._location.back();
    });
  }
}
