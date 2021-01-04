import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/Feature';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-admin-feature',
  templateUrl: './admin-feature.component.html',
  styleUrls: ['./admin-feature.component.css']
})
export class AdminFeatureComponent implements OnInit {

  constructor(private featureService:FeatureService) { }

features!:Feature[]; 

  ngOnInit(): void {

    this.featureService.getFeatures().subscribe((data)=>this.features=data)


  }

}
