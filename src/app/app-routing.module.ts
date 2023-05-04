import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './auth/forgetpassword/resetpassword/resetpassword.component';
import { GelAllProfileComponent } from './auth/admin/gel-all-profile/gel-all-profile.component';
import { MyProfileComponent } from './auth/admin/my-profile/my-profile.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';
import { StatistiqueComponent } from './auth/admin/statistique/statistique.component';
import { BankAccount } from './core/service/bank-account.service';
import { BankAccountComponent } from './Bank/bank-account/bank-account.component';
import { BankVirementComponent } from './Bank/bank-virement/bank-virement.component';

//lazy loading 
const routes: Routes = [
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
{path:'registre', component:RegistreComponent},
{path:'forgetPassword', component:ForgetpasswordComponent},
{path:'resetPassword', component:ResetpasswordComponent},
{path:'login', component:LoginComponent},
{path:'**' , pathMatch:'full', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
