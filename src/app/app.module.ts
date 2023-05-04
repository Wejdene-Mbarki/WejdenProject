import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { ForumComponent } from './forum/forum.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';

import { ResetpasswordComponent } from './auth/forgetpassword/resetpassword/resetpassword.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
   ForumComponent,
   ChatbotComponent,
   PaymentComponent,
   RegistreComponent,
   ForgetpasswordComponent,
   ResetpasswordComponent,
   LoginComponent,
   LoaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
