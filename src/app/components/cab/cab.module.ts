import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CabComponent } from './cab.component';
import { ListofCabsComponent } from './listof-cabs/listof-cabs.component';
import { CabRequestComponent } from './cab-request/cab-request.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';
import { CabCategoryComponent } from './cab-category/cab-category.component';



@NgModule({
  declarations: [
    CabComponent,
    ListofCabsComponent,
    CabRequestComponent,
    CabCategoryComponent
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
export class CabModule { }
