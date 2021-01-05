import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabasePage } from '../models/DatabasePage';

@Injectable({
  providedIn: 'root',
})
export class DatabasepageService {
  path = 'http://localhost:5000/api/DatabasePage/getdatabasepage';

  constructor(private http: HttpClient) {}

  getdatabasepage(): Observable<DatabasePage> {
    return this.http.get<DatabasePage>(this.path);
  }
}
