import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkPage } from '../models/WorkPage';

@Injectable({
  providedIn: 'root',
})
export class WorkpageService {
  path = 'http://localhost:5000/api/workpage/getworkpage';
  path2 = 'http://localhost:5000/api/workpage/updateworkpage';

  constructor(private http: HttpClient) {}

  getworkpage(): Observable<WorkPage> {
    return this.http.get<WorkPage>(this.path);
  }

  updateworkpage(workpage: WorkPage): Observable<WorkPage> {
    return this.http.post<WorkPage>(this.path2, workpage);
  }
}
