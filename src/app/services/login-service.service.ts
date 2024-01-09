import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userLoginSubject = new BehaviorSubject<string>('')

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

  setUserLoginSubject(data:string){

    this.userLoginSubject.next(data)
  }

  getUserLoginSubject(){

    return this.userLoginSubject.asObservable()
  }

  getLoggedInUserInfo(){

    let email: string;

    this.getUserLoginSubject().subscribe(data=>{

      email = data
    })

    let usersInfo:any[] = JSON.parse(JSON.stringify(require("../../../src/test-data/users-info.json")))

    return usersInfo.find((info)=>info.email===email)
  }
}
