import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevopsPage } from '../models/DevopsPage';

@Injectable({
  providedIn: 'root',
})
export class DevopspageService {
  
  path = 'http://localhost:5000/api/devopspage/getdevopspage';
  path2 = 'http://localhost:5000/api/devopspage/updatedevopspage';

  constructor(private http: HttpClient) {}

  getdevopspage(): Observable<DevopsPage> {
    return this.http.get<DevopsPage>(this.path);
  }

  updatedevopspage(devopspage: DevopsPage): Observable<DevopsPage> {
    return this.http.post<DevopsPage>(this.path2, devopspage);
  }
}
