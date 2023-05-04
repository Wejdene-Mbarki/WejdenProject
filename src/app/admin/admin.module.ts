import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { GelAllProfileComponent } from '../auth/admin/gel-all-profile/gel-all-profile.component';
import { StatistiqueComponent } from '../auth/admin/statistique/statistique.component';
import { UpdateProfileComponent } from '../auth/update-profile/update-profile.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllCompteComponent } from '../Bank/all-compte/all-compte.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashbordComponent,
    GelAllProfileComponent,
    StatistiqueComponent,
    AllCompteComponent,
    UpdateProfileComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
  ]
})
export class AdminModule { }
