import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CabmgtComponent } from './cabmgt.component';
import { CabDashboardComponent } from './cab-dashboard/cab-dashboard.component';
import { CabCategoriesComponent } from './cab-categories/cab-categories.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';



@NgModule({
  declarations: [
    CabmgtComponent,
    CabDashboardComponent,
    CabCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  providers :[
    AuthService, 
    AdminService
  ]
})
export class CabmgtModule { }
