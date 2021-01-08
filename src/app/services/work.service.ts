import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from '../models/Work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
path="http://localhost:5000/api/work/getallwork"
path2="http://localhost:5000/api/work/getbyidwork"
path3="http://localhost:5000/api/work/updatework"
  constructor(private http:HttpClient) { }


getallwork():Observable<Work[]>{
return this.http.get<Work[]>(this.path);
}

getbyidwork(workId:any):Observable<Work>{
  let newpath = this.path2;
  if(workId){
    newpath += '/' + workId;
  }
return this.http.get<Work>(newpath)
}

updatework(work:Work):Observable<Work>{
return this.http.post<Work>(this.path3,work);
}



}
