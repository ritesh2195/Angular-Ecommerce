import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userlogi } from 'src/models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthSericeService {

  isUserLoggedIn:boolean=true

  constructor(private http:HttpClient) { }

  getAllRegisteredUser():userlogi[]{
    // return[
    //   {
    //     email:'abc@gmail.com',
    //     password:'abcdef'
    //   },
    //   {
    //     email:'xyz@gmail.com',
    //     password:'querty'
    //   }
    // ]

    return JSON.parse(JSON.stringify(require("../../../src/test-data/login.json")))
  }

  isValidUserCredentials(email:string,password:string):boolean{

    for(let user of this.getAllRegisteredUser()){

      if(user.email===email && user.password===password){

        return true
      }
    }

    return false
  }
}
