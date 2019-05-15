
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import{ TestService} from "./test.service"
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component'
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component'
import {routing} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [TestService],
  bootstrap: [AppComponent,UserComponent, RegisterComponent]
})
export class AppModule { }