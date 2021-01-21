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
path3="http://localhost:5000/api/event/getbyidevent";
path4="http://localhost:5000/api/event/deleteevent";
path5="http://localhost:5000/api/event/eventcount";



  constructor(private http:HttpClient) { }


getallevent():Observable<EventM[]>{
return this.http.get<EventM[]>(this.path);
}

addevent(eventM:EventM):Observable<EventM>{

  return this.http.post<EventM>(this.path2,eventM);
}

getbyidevent(eventId:any):Observable<EventM>{
  let newpath=this.path3;
  if (eventId){
    newpath += "/"+eventId;
  } 
  return this.http.get<EventM>(newpath);
}

deleteevent(eventId:any):Observable<EventM>{
  let newpath=this.path4;
  if (eventId) {
    newpath += "/"+eventId;
  }
  return this.http.delete<EventM>(newpath);
}

geteventcount():Observable<number>{
return this.http.get<number>(this.path5);
}

}
