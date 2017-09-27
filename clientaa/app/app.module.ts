import {NgModule}       from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {LoginModule} from './login/login.module';
import {TestModule} from './test/test.module';
import {AdminModule} from './admin/admin.module';
import {AppRoutes} from './app.route';


@NgModule({
  declarations: [AppComponent],
  imports:      [BrowserModule, LoginModule, TestModule, AdminModule, AppRoutes],
  bootstrap:    [AppComponent],
})
export class AppModule {}