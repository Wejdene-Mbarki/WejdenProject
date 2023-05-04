import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { MyProfileComponent } from '../auth/admin/my-profile/my-profile.component';
import { ModifierProfileUserComponent } from '../modifier-profile-user/modifier-profile-user.component';
import { BankAccountComponent } from '../Bank/bank-account/bank-account.component';
import { BankVirementComponent } from '../Bank/bank-virement/bank-virement.component';
import { TransactionComponent } from '../Bank/transaction/transaction.component';



@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyProfileComponent,
    ModifierProfileUserComponent,
    TransactionComponent,
    BankAccountComponent,
    BankVirementComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
