import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Work } from 'src/app/models/Work';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-update-form',
  templateUrl: './work-update-form.component.html',
  styleUrls: ['./work-update-form.component.css'],
})
export class WorkUpdateFormComponent implements OnInit {
  work: Work = new Work();

  constructor(
    private activatedRoure: ActivatedRoute,
    private workservice: WorkService,
    private sweetAlert: Sweetalert2Service
  ) {}

  ngOnInit(): void {
    this.activatedRoure.params.subscribe((params) => {
      this.workservice
        .getbyidwork(params['workId'])
        .subscribe((data) => (this.work = data));
    });
  }

  updateform(form: NgForm) {
    this.workservice.updatework(this.work).subscribe((data) => {
      this.sweetAlert.fire('Güncelleme Başarılı');
    });
  }
}
