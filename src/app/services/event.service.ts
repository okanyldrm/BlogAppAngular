import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventInput, EventInputTransformer } from '@fullcalendar/core';
import { Observable } from 'rxjs';
import { EventM } from '../models/EventM';

@Injectable({
  providedIn: 'root'
})
export class EventService {

path="http://localhost:5000/api/event/getallevent";
path2="http://localhost:5000/api/event/addevent";



  constructor(private http:HttpClient) { }


getallevent():Observable<EventM[]>{
return this.http.get<EventM[]>(this.path);
}

addevent(eventM:EventM):Observable<EventM>{

  return this.http.post<EventM>(this.path2,eventM);

}


}
