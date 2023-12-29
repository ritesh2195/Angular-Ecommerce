import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  getAllRegisteredUser(){

    return this.http.get('https://reqres.in/api/users?page=2')
  }
}
