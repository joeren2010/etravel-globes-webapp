import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CabComponent } from './cab.component';
import { ListofCabsComponent } from './listof-cabs/listof-cabs.component';
import { CabCategoryComponent } from './cab-category/cab-category.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';
import { CabRequestsComponent } from './cab-requests/cab-requests.component';
import { CabReservComponent } from './cab-reserv/cab-reserv.component';


@NgModule({
  declarations: [
    CabComponent,
    ListofCabsComponent,
    CabCategoryComponent,
    CabRequestsComponent,
    CabReservComponent,
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
