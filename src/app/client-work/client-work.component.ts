import { Component, OnInit } from '@angular/core';
import { WorkPage } from '../models/WorkPage';
import { WorkpageService } from '../services/workpage.service';

@Component({
  selector: 'app-client-work',
  templateUrl: './client-work.component.html',
  styleUrls: ['./client-work.component.css']
})
export class ClientWorkComponent implements OnInit {

  workpage:WorkPage = new WorkPage();
  constructor(private workpageService: WorkpageService) { }

  ngOnInit(): void {
this.workpageService.getworkpage().subscribe((data)=>this.workpage=data)
  }

}
