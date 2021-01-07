import { Component, OnInit } from '@angular/core';
import { Database } from '../models/Database';
import { DatabasePage } from '../models/DatabasePage';
import { DatabaseService } from '../services/database.service';
import { DatabasepageService } from '../services/databasepage.service';

@Component({
  selector: 'app-client-service-database',
  templateUrl: './client-service-database.component.html',
  styleUrls: ['./client-service-database.component.css'],
})
export class ClientServiceDatabaseComponent implements OnInit {
  databasepage: DatabasePage = new DatabasePage();
  databases!: Database[];
  constructor(
    private databasepageService: DatabasepageService,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.databasepageService
      .getdatabasepage()
      .subscribe((data) => (this.databasepage = data));
    this.databaseService.getalldatabase().subscribe((data)=>this.databases=data);
  }
}
