import { Component, OnInit } from '@angular/core';
import { DatabasePage } from 'src/app/models/DatabasePage';
import { DatabasepageService } from 'src/app/services/databasepage.service';

@Component({
  selector: 'app-admin-service-database',
  templateUrl: './admin-service-database.component.html',
  styleUrls: ['./admin-service-database.component.css']
})
export class AdminServiceDatabaseComponent implements OnInit {

  databasepage:DatabasePage = new DatabasePage();

  constructor(private databasepageService:DatabasepageService) { }

  ngOnInit(): void {

    this.databasepageService.getdatabasepage().subscribe((data)=>this.databasepage=data);


  }

}
