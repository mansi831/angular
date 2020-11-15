import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { HeaderComponent } from './sidebar/header/header.component';
import { FooterComponent } from './sidebar/footer/footer.component';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
