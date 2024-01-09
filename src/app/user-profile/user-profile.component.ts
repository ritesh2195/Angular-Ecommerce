import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userInfo:any

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {

    this.userInfo = this.loginService.getLoggedInUserInfo()
  }

}
