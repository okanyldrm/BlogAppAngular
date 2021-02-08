import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../models/Register';
import { AuthService } from '../services/auth.service';
import { Sweetalert2Service } from '../services/sweetalert2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private sweetAlert: Sweetalert2Service
  ) {}

  registermodel: RegisterModel = new RegisterModel();

  ngOnInit(): void {}

  Register(ngform: NgForm) {
    this.authService.AuthRegister(this.registermodel).subscribe((data) => {
      this.sweetAlert.fire('Register Done');
    });
  }
}
