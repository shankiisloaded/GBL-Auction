import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, UserService, TeamServices} from './_services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegisterPlayerComponent} from './registerPlayer';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterPlayerComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    TeamServices
       // provider used to create fake backend

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
