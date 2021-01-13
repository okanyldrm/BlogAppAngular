import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feature } from '../models/Feature';
import { FeatureService } from '../services/feature.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-feature-add',
  templateUrl: './admin-feature-add.component.html',
  styleUrls: ['./admin-feature-add.component.css'],
})
export class AdminFeatureAddComponent implements OnInit {
  feature: Feature = new Feature();
  constructor(
    private featureService: FeatureService,
    private sweetAlert: Sweetalert2Service
  ) {}

  ngOnInit(): void {}

  addfeature(form: NgForm) {
    //console.log(form.value.title)
    this.featureService.addFeature(this.feature).subscribe((data) => {
      this.sweetAlert.fire('Ekleme Başarılı');
    });
  }
}
