import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactivesignupComponent } from './reactivesignup/reactivesignup.component';



@NgModule({
  declarations: [SignupComponent, ReactivesignupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SignupComponent,
    ReactivesignupComponent
  ]
})
export class FormsModule { }
