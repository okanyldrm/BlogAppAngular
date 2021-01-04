import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontendPage } from '../models/FrontendPage';

@Injectable({
  providedIn: 'root',
})
export class FrontendpageService {
  path = 'http://localhost:5000/api/frontendpage/getfrontendpage';
  path2 = 'http://localhost:5000/api/frontendpage/frontendpageupdate';

  constructor(private http: HttpClient) {}

  getfrontendpage(): Observable<FrontendPage> {
    return this.http.get<FrontendPage>(this.path);
  }

  frontendpageupdate(frontend:FrontendPage):Observable<FrontendPage>{
    return this.http.post<FrontendPage>(this.path2,frontend);
  }
}
