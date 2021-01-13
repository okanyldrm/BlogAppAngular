import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend } from '../models/Backend';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  path = 'http://localhost:5000/api/backend/getallbackend';
  path2 = 'http://localhost:5000/api/backend/getbackend';
  path3='http://localhost:5000/api/backend/updatebackend';
  path4='http://localhost:5000/api/backend/addbackend';
  path5='http://localhost:5000/api/backend/deletebackend';
  constructor(private http: HttpClient) {}

  getbackendall(): Observable<Backend[]> {
    return this.http.get<Backend[]>(this.path);
  }

  updatebackend(backend:Backend): Observable<Backend> {
    return this.http.post<Backend>(this.path3,backend);
  }

  getBybackend(backendId:any):Observable<Backend>{
    let newpath = this.path2;
    if(backendId){
      newpath += '/' + backendId;
    }
    return this.http.get<Backend>(newpath);
   }

   addBackend(backend:Backend):Observable<Backend>{
    return this.http.post<Backend>(this.path4,backend);
   }
   
   deleteBackend(backendId:any):Observable<Backend>{
    let newpath = this.path5;
    if(backendId){
      newpath += '/' + backendId;
    }
     return this.http.delete<Backend>(newpath);
   }
}
