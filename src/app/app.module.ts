import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginServiceService } from './services/login-service.service';
import { LoginGuard } from './guards/login.guard';
import { ForgetPasswordComponent } from './user-login/forget-password/forget-password.component';
import { ToasterComponent } from './toaster/toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';


const appRoutes:Routes=[
  {
  path:'',component:ProductCardComponent
},
{
  path:'login',component:UserLoginComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'**',redirectTo:'/cart'
}
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ForgetPasswordComponent,
    ToasterComponent,
    ProductCardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule
  ],
  providers: [LoginServiceService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
