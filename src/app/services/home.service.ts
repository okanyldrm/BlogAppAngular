import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomePage } from '../models/HomePage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
path = "http://localhost:5000/api/homepage/getbyhomepage";
path2 = "http://localhost:5000/api/homepage/updatehomepage";
  constructor(private http : HttpClient) { }

  getHomePage():Observable<HomePage>{
    return this.http.get<HomePage>(this.path);
  }

  updateHomePage(homepage:HomePage):Observable<HomePage>{
    return this.http.post<HomePage>(this.path2,homepage);
  }

}

