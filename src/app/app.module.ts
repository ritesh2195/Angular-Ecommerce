import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from './services/login-service.service';
import { LoginGuard } from './guards/login.guard';
import { ToasterComponent } from './toaster/toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { DataService } from './services/data.service';
import { AppRouterModule } from './app-router/app-router.module';
import { AddressComponent } from './address/address.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AddressGuard } from './guards/address.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayContentComponent } from './overlay-content/overlay-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ToasterComponent,
    ProductCardComponent,
    CartComponent,
    AddressComponent,
    OrderConfirmationComponent,
    OverlayContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule ,
    CommonModule,
    AppRouterModule
  ],
  providers: [LoginServiceService,LoginGuard,DataService,AddressGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
