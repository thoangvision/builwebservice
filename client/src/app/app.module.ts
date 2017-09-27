import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {AppRoutes} from './app.route';
import {FormsModule} from '@angular/forms';

import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';

import {AuthGuard} from './guards/auth.guard';


@NgModule({
  imports:      [ BrowserModule,LoginModule, MainModule, AppRoutes, FormsModule],
  declarations: [ AppComponent],
  providers: [AuthGuard],
  bootstrap:    [ AppComponent ],
  
})

export class AppModule { }
