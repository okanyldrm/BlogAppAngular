import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/Feature';
import { FeatureService } from '../services/feature.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-admin-feature',
  templateUrl: './admin-feature.component.html',
  styleUrls: ['./admin-feature.component.css'],
})
export class AdminFeatureComponent implements OnInit {
  constructor(
    private featureService: FeatureService,
    private sweetalert: Sweetalert2Service
  ) {}

  features!: Feature[];

  ngOnInit(): void {
    this.featureService
      .getFeatures()
      .subscribe((data) => (this.features = data));
  }

  deleteFeature(id: any) {
    this.featureService.deleteFeature(id).subscribe((data) => {
      this.sweetalert.fire('Deleted');
      
    });
  }
}
