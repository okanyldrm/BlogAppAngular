import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devops } from '../models/Devops';

@Injectable({
  providedIn: 'root'
})
export class DevopsService {

path="http://localhost:5000/api/devops/getalldevops";
path2="http://localhost:5000/api/devops/getbyiddevops";
path3="http://localhost:5000/api/devops/updatedevops";

  constructor(private http:HttpClient) { }

getalldevops():Observable<Devops[]>{
return this.http.get<Devops[]>(this.path);
}

getbyiddevops(devopsId:any):Observable<Devops>{

let newpath=this.path2;

  if (devopsId) {
    newpath+="/"+devopsId;
  }

return this.http.get<Devops>(newpath);
}

updatedevops(devops:Devops):Observable<Devops>{
return this.http.post<Devops>(this.path3,devops);
}

}
