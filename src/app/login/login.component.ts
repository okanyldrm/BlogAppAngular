import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from '../models/LoginUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:LoginUser=new LoginUser();
  TOKEN_KEY="Token";
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
   
  }


  Login(ngForm:NgForm){
    //console.log(ngForm.value.password+"--"+ngForm.value.username)
    this.auth.login(this.loginUser);
  }

  LogOut(){
    this.auth.logout();
  }


}
