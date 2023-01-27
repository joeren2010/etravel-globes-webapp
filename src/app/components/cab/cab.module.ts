import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CabComponent } from './cab.component';
import { CabmgtComponent } from './cabmgt/cabmgt.component';
import { CabcatmgtComponent } from './cabcatmgt/cabcatmgt.component';
import { CabcatothComponent } from './cabcatoth/cabcatoth.component';
import { ListofCabsComponent } from './listof-cabs/listof-cabs.component';
import { CabCategoryComponent } from './cab-category/cab-category.component';
import { CabRequestsComponent } from './cab-requests/cab-requests.component';
import { CabReservComponent } from './cab-reserv/cab-reserv.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';


@NgModule({
  declarations: [
    CabComponent,
    CabmgtComponent,
    CabcatmgtComponent,
    CabcatothComponent,    
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
