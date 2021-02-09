import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventInput, EventInputTransformer } from '@fullcalendar/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { codefirstDTO } from '../models/codefirstDTO';
import { EventCategoryDTO } from '../models/EventCategoryDTO';
import { EventM } from '../models/EventM';
import { GetMonthEventDTO } from '../models/GetMonthEventDTO';
import { PostWeekEventDTO } from '../models/PostWeekEventDTO';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  path = 'http://localhost:5000/api/event/getallevent';
  path2 = 'http://localhost:5000/api/event/addevent';
  path3 = 'http://localhost:5000/api/event/getbyidevent';
  path4 = 'http://localhost:5000/api/event/deleteevent';
  path5 = 'http://localhost:5000/api/event/eventcount';
  path7 = 'http://localhost:5000/api/event/GetEventCategory';
  path8 = 'http://localhost:5000/api/event/GetWeekEvent';
  path9 = 'http://localhost:5000/api/event/GetMonthEvent';

  constructor(private http: HttpClient, private authService: AuthService) {}

  get headers() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.token,
    });
    return headers;
  }

  getallevent(): Observable<EventM[]> {
    return this.http.get<EventM[]>(this.path, { headers: this.headers });
  }

  addevent(eventM: EventM): Observable<EventM> {
    return this.http.post<EventM>(this.path2, eventM, {
      headers: this.headers,
    });
  }

  getbyidevent(eventId: any): Observable<EventM> {
    let newpath = this.path3;
    if (eventId) {
      newpath += '/' + eventId;
    }
    return this.http.get<EventM>(newpath, { headers: this.headers });
  }

  deleteevent(eventId: any): Observable<EventM> {
    let newpath = this.path4;
    if (eventId) {
      newpath += '/' + eventId;
    }
    return this.http.delete<EventM>(newpath, { headers: this.headers });
  }

  geteventcount(): Observable<number> {
    return this.http.get<number>(this.path5, { headers: this.headers });
  }

  getcategoryeventdto(): Observable<EventCategoryDTO[]> {
    return this.http.get<EventCategoryDTO[]>(this.path7, {
      headers: this.headers,
    });
  }

  getweekevent(): Observable<EventCategoryDTO[]> {
    return this.http.get<EventCategoryDTO[]>(this.path8, {
      headers: this.headers,
    });
  }

  getmonthevent(): Observable<GetMonthEventDTO> {
    return this.http.get<GetMonthEventDTO>(this.path9, {
      headers: this.headers,
    });
  }
  
}
