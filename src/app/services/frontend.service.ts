import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frontend } from '../models/Frontend';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
path="http://localhost:5000/api/frontend/getallfrontend";
path2="http://localhost:5000/api/frontend/getbyidfrontend";
path3="http://localhost:5000/api/frontend/updatefrontend";

  constructor(private http:HttpClient) { }


getallfrontend():Observable<Frontend[]>{
return this.http.get<Frontend[]>(this.path);
}

geybyidfrontend(frontendId:any):Observable<Frontend>{
  let newpath = this.path2;
  if(frontendId){
    newpath += '/' + frontendId;
  }
  return this.http.get<Frontend>(newpath);
}

updatefrontend(frontend:Frontend):Observable<Frontend>{
return this.http.post<Frontend>(this.path3,frontend);
}

}
