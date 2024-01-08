import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { CartComponent } from '../cart/cart.component';
import { AddressComponent } from '../address/address.component';
import { LoginGuard } from '../guards/login.guard';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
import { AddressGuard } from '../guards/address.guard';
import { UserProfileComponent } from '../user-profile/user-profile.component';


const appRoutes:Routes=[
{
  path:'',component:ProductCardComponent
},
{
  path:'my-profile',component:UserProfileComponent,canActivate:[LoginGuard]
},
{
  path:'product-card',component:ProductCardComponent
},
{
  path:'login',component:UserLoginComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'address',component:AddressComponent,canActivate:[AddressGuard]
},
{
  path:'order-confirmation',component:OrderConfirmationComponent,canActivate:[AddressGuard]
},
{
  path:'**',redirectTo:'/product-card'
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
