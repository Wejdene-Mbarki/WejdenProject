import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/listProduct.component';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ListClientComponent } from './list-admin/list-admin.component';
import { CartComponent } from './cart/cart.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { HealthComponent } from './health/health.component';
import { CREATIVEComponent } from './creative/creative.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,

    ProductsComponent,
    FarmerComponent,
    ListClientComponent,
    CartComponent,
    EducationLoanComponent,
    HealthComponent,
    CREATIVEComponent
 
  
  ],
  imports: [
    CommonModule, 
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
