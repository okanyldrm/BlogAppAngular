import { Component, OnInit } from '@angular/core';
import { DatabasePage } from '../models/DatabasePage';
import { DatabasepageService } from '../services/databasepage.service';

@Component({
  selector: 'app-client-service-database',
  templateUrl: './client-service-database.component.html',
  styleUrls: ['./client-service-database.component.css'],
})
export class ClientServiceDatabaseComponent implements OnInit {
  databasepage: DatabasePage = new DatabasePage();

  constructor(private databasepageService: DatabasepageService) {}

  ngOnInit(): void {
    this.databasepageService
      .getdatabasepage()
      .subscribe((data) => (this.databasepage = data));
  }
}
