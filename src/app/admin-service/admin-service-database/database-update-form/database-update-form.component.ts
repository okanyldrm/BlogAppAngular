import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Database } from 'src/app/models/Database';
import { DatabaseService } from 'src/app/services/database.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-database-update-form',
  templateUrl: './database-update-form.component.html',
  styleUrls: ['./database-update-form.component.css'],
})
export class DatabaseUpdateFormComponent implements OnInit {
  database: Database = new Database();

  constructor(
    private databaseService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private sweetalert: Sweetalert2Service
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.databaseService
        .getByIdDatabase(params['databaseId'])
        .subscribe((data) => (this.database = data));
    });
  }

  updateform(form: NgForm) {
    this.databaseService.updateForm(this.database).subscribe((data) => {
      this.sweetalert.fire("Güncelleme Başarılı")
    });
  }
}
