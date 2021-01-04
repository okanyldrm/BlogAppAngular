import { Component, OnInit } from '@angular/core';
import { Feature } from '../models/Feature';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-client-feature',
  templateUrl: './client-feature.component.html',
  styleUrls: ['./client-feature.component.css']
})
export class ClientFeatureComponent implements OnInit {

  constructor(private featureService:FeatureService) { }

 features!:Feature[];


  ngOnInit(): void {

    this.featureService.getFeatures().subscribe((data)=>this.features=data);


  }



}
