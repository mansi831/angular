import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactivesignupComponent } from './forms/reactivesignup/reactivesignup.component';
import { SignupComponent } from './forms/signup/signup.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';

const routes: Routes = [
  { path: 'products', 
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'orders', component:ListOrdersComponent},
  {path:'signup',component:SignupComponent},
  {path:'reactive',component:ReactivesignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
