import { Component, OnInit } from '@angular/core';
import { Work } from '../models/Work';
import { WorkPage } from '../models/WorkPage';
import { WorkService } from '../services/work.service';
import { WorkpageService } from '../services/workpage.service';

@Component({
  selector: 'app-client-work',
  templateUrl: './client-work.component.html',
  styleUrls: ['./client-work.component.css'],
})
export class ClientWorkComponent implements OnInit {
  workpage: WorkPage = new WorkPage();
  works!: Work[];
  constructor(
    private workpageService: WorkpageService,
    private workService: WorkService
  ) {}

  ngOnInit(): void {
    this.workpageService
      .getworkpage()
      .subscribe((data) => (this.workpage = data));
    this.workService.getallwork().subscribe((data) => (this.works = data));
  }
}
