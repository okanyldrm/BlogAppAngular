import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Feature } from 'src/app/models/Feature';
import { FeatureService } from 'src/app/services/feature.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-admin-feature-update',
  templateUrl: './admin-feature-update.component.html',
  styleUrls: ['./admin-feature-update.component.css']
})
export class AdminFeatureUpdateComponent implements OnInit {

  constructor(private featureService:FeatureService,private activatedRoute: ActivatedRoute,private sweetalert:Sweetalert2Service,private router: Router) { }

  feature:Feature=new Feature();

  ngOnInit(): void {


    this.activatedRoute.params.subscribe((params) => {
      this.featureService
        .getByFeatures(params['featureId'])
        .subscribe((data) => (this.feature = data));
    });


  }


  updateFeature(form: NgForm) {
    // console.log(form.value.mainTitle);
    // console.log(form.value.downloads);
    // console.log(form.value.happyClient);
    // console.log(form.value.projectDone);
    // console.log(form.value.hoursSpent);
    // console.log(form.value.title2Content);
    // console.log(form.value.title2);
    // console.log(form.value.titleContent);
    // console.log(form.value.miniTitle);
    // console.log(form.value.title);
   
    this.featureService.updateFeature(this.feature).subscribe((data) => {
      this.sweetalert.fire('Updated Feature : '+ this.feature.title);
    });
    this.router.navigate(['/admin/home']);
  }

}
