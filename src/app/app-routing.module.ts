import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateAdminComponent } from './components/admin/create-admin/create-admin.component';
import { ListofAdminsComponent } from './components/admin/listof-admins/listof-admins.component';
import { AdminDetailComponent } from './components/admin/admin-detail/admin-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginAdminComponent } from './components/auth/login-admin/login-admin.component';
import { LoginClientsComponent } from './components/auth/login-clients/login-clients.component';
import { LoginDriversComponent } from './components/auth/login-drivers/login-drivers.component';
import { NewPasswdComponent } from './components/auth/new-passwd/new-passwd.component';
import { NewRegisterComponent } from './components/auth/new-register/new-register.component';
import { BookcabComponent } from './components/bookcab/bookcab.component';
import { BookingComponent } from './components/booking/booking.component';
import { CalcfareComponent } from './components/calcfare/calcfare.component';
import { ClientComponent } from './components/client/client.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListofClientsComponent } from './components/client/listof-clients/listof-clients.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { DriverComponent } from './components/driver/driver.component';
import { CreateDriverComponent } from './components/driver/create-driver/create-driver.component';
import { ListofDriversComponent } from './components/driver/listof-drivers/listof-drivers.component';
import { DriverDetailComponent } from './components/driver/driver-detail/driver-detail.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full" },
  { path:'home' , component:HomeComponent },
  { path:'about' , component:AboutComponent },
  { path:'admin' , children: [
    { path :'', component: AdminComponent },
    { path :'createadmin', component: CreateAdminComponent },
    { path :'listofadmin', component: ListofAdminsComponent },
    { path :'admindetail', component: AdminDetailComponent },
  ]},
  { path:'auth' , children: [
    { path :'', component: AuthComponent },
    { path :'loginadmin', component: LoginAdminComponent },
    { path :'loginclients', component: LoginClientsComponent },
    { path :'logindrivers', component: LoginDriversComponent },
    { path :'newpasswd', component: NewPasswdComponent },
    { path :'newregister', component: NewRegisterComponent },
  ]},
  { path:'bookcab' , component:BookcabComponent },
  { path:'booking' , component:BookingComponent },
  { path:'calcfare' , component:CalcfareComponent },
  { path:'client' , children: [
    { path :'', component: ClientComponent },
    { path :'createclient', component: CreateClientComponent },
    { path :'listofclients', component: ListofClientsComponent },
    { path :'clientdetail', component: ClientDetailComponent },
  ]},
  { path:'contact' , component:ContactComponent },
  { path:'driver' , children: [
    { path :'', component: DriverComponent },
    { path :'createdriver', component: CreateDriverComponent },
    { path :'listofdrivers', component: ListofDriversComponent },
    { path :'driverdetail', component: DriverDetailComponent },
  ]},
  { path:'payment' , component:PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
