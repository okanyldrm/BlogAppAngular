import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../models/Feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  path = "http://localhost:5000/api/feature/features";
  path2 = "http://localhost:5000/api/Feature/getbyfeature"
  path3 = "http://localhost:5000/api/Feature/updatefeature";
  constructor(private http:HttpClient) { }

 


getFeatures():Observable<Feature[]>{
 return this.http.get<Feature[]>(this.path);
}

getByFeatures(featureId:any):Observable<Feature>{
  let newpath = this.path2;
  if(featureId){
    newpath += '/' + featureId;
  }
  return this.http.get<Feature>(newpath);
 }

 updateFeature(feature:Feature):Observable<Feature>{
  return this.http.post<Feature>(this.path3,feature);
}
 

}
