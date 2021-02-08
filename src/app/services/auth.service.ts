import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from '../models/LoginUser';
import { LoginUserResponse } from '../models/LoginUserResponse';
import { RegisterModel } from '../models/Register';
import { RegisterComponent } from '../register/register.component';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Sweetalert2Service } from './sweetalert2.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = 'http://localhost:5000/api/Authentication/register';
  path2 = 'http://localhost:5000/api/Authentication/login';
  userToken: any;
  decodedToken: any;
  TOKEN_KEY="Token";
  // loggedin:boolean=false;
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());

  constructor(
    private http: HttpClient,
    private router: Router,
    private sweetalert: Sweetalert2Service
  ) {}



  login(loginUser: LoginUser) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    
    
    this.http
      .post<LoginUserResponse>(this.path2, loginUser, { headers: headers })
      .subscribe((data) => {
       
       
         //localstorage'a kaydediyoruz
        this.userToken = data.token;
        //console.log(data.token);
        this.saveToken(data.token);
        this.saveStatus();
        this.decodedToken = jwt_decode(data.token);
        this.sweetalert.fire('Login Success');
        localStorage.setItem('status','1');
        this.router.navigateByUrl('/admin');
        //console.log(this.decodedToken);
      });
  }

  register(registerModel: RegisterModel) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
   
    this.http
      .post<RegisterModel>(this.path, registerModel, { headers: headers })
      .subscribe((data) => {

      });
  }

  //localstorage'a kaydetme
  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
     //alert(localStorage.getItem(this.TOKEN_KEY))
  }

  saveStatus(){
    localStorage.setItem('status', '1');
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    this.sweetalert.fire("LogOut");
    this.router.navigate(['login']);
    localStorage.setItem('status','0');
  }


  loggedIn(){
    let logged = this.checkLoginStatus();
    return logged;
  }


  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }

  

  // getCurrnetUserId(){
    
  //   let token:any = this.token;
  //   return jwt_decode(token)
  // }

  checkLoginStatus(){
    var loginCookie= localStorage.getItem("status");
    if (loginCookie=="1"){
      return true;
    }else{
      return false;
    }
  }

}
