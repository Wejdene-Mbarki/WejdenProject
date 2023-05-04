import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/listProduct.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ListClientComponent } from './list-admin/list-admin.component';
import { CREATIVEComponent } from './creative/creative.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [{ path : '', component:ProductsComponent, children:[

  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/education', component: EducationLoanComponent },
  { path: 'list/farmer', component: FarmerComponent },
  { path: 'listadmin', component: ListClientComponent },
  { path: 'list/creative', component: CREATIVEComponent },
  { path: 'list/health', component: HealthComponent }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
