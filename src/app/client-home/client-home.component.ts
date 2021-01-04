import { Component, OnInit } from '@angular/core';
import { HomePage } from '../models/HomePage';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
})
export class ClientHomeComponent implements OnInit {
  constructor(private homeservice: HomeService) {}

  homepage= new HomePage();

  ngOnInit(): void {
    this.homeservice.getHomePage().subscribe((data) => (this.homepage=data));
  }
}
