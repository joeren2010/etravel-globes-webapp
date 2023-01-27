import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResvmgtComponent } from './resvmgt.component';
import { ResvCabsComponent } from './resv-cabs/resv-cabs.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';



@NgModule({
  declarations: [
    ResvmgtComponent,
    ResvCabsComponent
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
export class ResvmgtModule { }
