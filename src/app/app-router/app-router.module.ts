import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { CartComponent } from '../cart/cart.component';


const appRoutes:Routes=[
{
  path:'',component:ProductCardComponent
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
