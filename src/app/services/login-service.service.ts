import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  getAllRegisteredUser(){

    return this.http.get('https://reqres.in/api/users?page=2')
  }

  isUserLoggedIn(){

    if(localStorage.getItem('cookie')==='abcdef1234'){

      return true;
    }

    return false
  }
}
