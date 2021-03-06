import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Database } from '../models/Database';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  path = 'http://localhost:5000/api/database/getalldatabase';
  path2 = 'http://localhost:5000/api/database/getbyiddatabase';
  path3 = 'http://localhost:5000/api/database/updatedatabase';
  path4 = 'http://localhost:5000/api/database/adddatabase';
  path5 = 'http://localhost:5000/api/database/deletedatabase';

  constructor(private http: HttpClient) {}

  getalldatabase(): Observable<Database[]> {
    return this.http.get<Database[]>(this.path);
  }

  getByIdDatabase(databaseId: any): Observable<Database> {
    let newpath = this.path2;
    if (databaseId) {
      newpath += '/' + databaseId;
    }
    return this.http.get<Database>(newpath);
  }

  updateForm(database: Database): Observable<Database> {
    return this.http.post<Database>(this.path3, database);
  }

  adddatabase(database: Database): Observable<Database> {
    return this.http.post<Database>(this.path4, database);
  }

  deletedatabase(databaseId:any):Observable<Database>{
    let newpath = this.path5;
    if (databaseId) {
      newpath += '/' + databaseId;
    }
    return this.http.delete<Database>(newpath);
  }
}
