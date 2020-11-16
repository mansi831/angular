import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { HeaderComponent } from './sidebar/header/header.component';
import { FooterComponent } from './sidebar/footer/footer.component';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';

import { SignupComponent } from './forms/signup/signup.component';
import { ReactivesignupComponent } from './forms/reactivesignup/reactivesignup.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SignupComponent,
    ReactivesignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
