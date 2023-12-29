import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSericeService } from '../services/auth-serice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Output() isUserLoggedIn:EventEmitter<boolean> = new EventEmitter<boolean>()

  loginError!:boolean;

  userLoginForm!:FormGroup;

  constructor(private router:Router,private authService:AuthSericeService) { }

  ngOnInit(): void {

    this.userLoginForm = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }

  onSubmit(){

    let email=this.userLoginForm.value.username

    let password = this.userLoginForm.value.password

    if(this.authService.isValidUserCredentials(email,password)){

      localStorage.setItem('cookie','abcdef1234')

      this.authService.isUserLoggedIn=false;

      this.router.navigate(['/dashboard'])
    }

    else{

      this.loginError=true

      //window.alert('Invalid Email or password')

      this.userLoginForm.reset()
    }

    this.isUserLoggedIn.emit(true)
  }

}
