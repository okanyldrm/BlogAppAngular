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
path4="http://localhost:5000/api/frontend/addfrontend";
path5="http://localhost:5000/api/frontend/deletefrontend";

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

addfrontend(frontend:Frontend):Observable<Frontend>{
return this.http.post<Frontend>(this.path4,frontend);
}

deletefrontend(frontendId:any):Observable<Frontend>{
  let newpath = this.path5;
  if(frontendId){
    newpath += '/' + frontendId;
  }
 return this.http.delete<Frontend>(newpath);
}

}
