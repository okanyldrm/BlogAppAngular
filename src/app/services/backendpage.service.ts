import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendPage } from '../models/BackendPage';

@Injectable({
  providedIn: 'root',
})
export class BackendpageService {
  path = 'http://localhost:5000/api/BackendPage/backendpage';
  path2 = 'http://localhost:5000/api/BackendPage/backendpageupdate';

  constructor(private http: HttpClient) {}

  getbackendpage(): Observable<BackendPage> {
    return this.http.get<BackendPage>(this.path);
  }
  backendpageupdate(backendPage:BackendPage): Observable<BackendPage> {
    return this.http.post<BackendPage>(this.path2,backendPage);
  }



}
