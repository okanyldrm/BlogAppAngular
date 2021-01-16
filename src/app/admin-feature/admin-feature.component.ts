import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/Feature';
import { FeatureService } from '../services/feature.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-feature',
  templateUrl: './admin-feature.component.html',
  styleUrls: ['./admin-feature.component.css'],
})
export class AdminFeatureComponent implements OnInit {
  constructor(
    private featureService: FeatureService,
    private sweetalert: Sweetalert2Service,
    private _location: Location
  ) {}
  featureName!: string;
  features!: Feature[];
  p: number = 1;

  ngOnInit(): void {
    this.featureService
      .getFeatures()
      .subscribe((data) => (this.features = data));
      
  }

  deleteFeature(id: any) {
    this.featureService.deleteFeature(id).subscribe((data) => {

      setTimeout(() => {
        window.location.reload();
      }, 2990);

      this.sweetalert.toast("Deleted ID : "+id,3000);

     
    });
  }

  Search() {
    if (this.featureName == '') {
      this.ngOnInit();
    } else {
      this.features = this.features.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.featureName.toLocaleLowerCase());
      });
    }
  }

  key: string = 'name';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  key2: string = 'id';
  sortbyid(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
