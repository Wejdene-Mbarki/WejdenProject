import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { GelAllProfileComponent } from '../auth/admin/gel-all-profile/gel-all-profile.component';
import { StatistiqueComponent } from '../auth/admin/statistique/statistique.component';
import { UpdateProfileComponent } from '../auth/update-profile/update-profile.component';
import { AllCompteComponent } from '../Bank/all-compte/all-compte.component';

const routes: Routes = [
  { path:'', component:AdminComponent, children:[
  { path: 'requestLoan', loadChildren: () => import('../request-loan/request-loan.module').then(m => m.RequestLoanModule) },
  { path: 'forum', loadChildren: () => import('../forum/forum.module').then(m => m.ForumModule) },
  { path: 'investment', loadChildren: () => import('../investment/investment.module').then(m => m.InvestmentModule) },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'payment', loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  {path:'Dashbord',component:DashbordComponent},
  {path:'alluser',component:GelAllProfileComponent},
  {path:'stat',component:StatistiqueComponent},
  {path:'update',component:UpdateProfileComponent},
  {path:'allCompte',component:AllCompteComponent},

]}, 
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
