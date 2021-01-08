import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutPage } from '../models/AboutPage';

@Injectable({
  providedIn: 'root',
})
export class AboutpageService {
  path = 'http://localhost:5000/api/aboutpage/getaboutpage';

  path2 = 'http://localhost:5000/api/aboutpage/updateaboutpage';
  constructor(private http: HttpClient) {}

  getaboutpage(): Observable<AboutPage> {
    return this.http.get<AboutPage>(this.path);
  }

  updateaboutpage(aboutpage: AboutPage): Observable<AboutPage> {
    return this.http.post<AboutPage>(this.path2, aboutpage);
  }
}
