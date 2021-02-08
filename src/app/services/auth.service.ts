import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/Register';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

path="http://localhost:5000/api/Authentication/register";

  constructor(private http:HttpClient) { }



  AuthRegister(registerModel:RegisterModel):Observable<RegisterModel>{
  return this.http.post<RegisterModel>(this.path,registerModel);
  }




}
