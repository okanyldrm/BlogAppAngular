import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartSizeModel } from '../models/ChartSizeModel';

@Injectable({
  providedIn: 'root',
})
export class ChartModelService {
  path = 'http://localhost:5000/api/chart/getchartmodel';
  constructor(private http: HttpClient) {}

  getchartsize(): Observable<ChartSizeModel> {
    return this.http.get<ChartSizeModel>(this.path);
  }
}
