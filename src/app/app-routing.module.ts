import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CabComponent } from './components/cab/cab.component';
//import { CabmgtComponent } from './components/cab/cabmgt/cabmgt.component';
import { CabcatmgtComponent } from './components/cab/cabcatmgt/cabcatmgt.component';
import { CabcatothComponent } from './components/cab/cabcatoth/cabcatoth.component';
import { ListofCabsComponent } from './components/cab/listof-cabs/listof-cabs.component';
import { CabReservComponent } from './components/cab/cab-reserv/cab-reserv.component';
import { CabCategoryComponent } from './components/cab/cab-category/cab-category.component';
import { CabRequestsComponent } from './components/cab/cab-requests/cab-requests.component';
import { CabmgtComponent } from './components/cabmgt/cabmgt.component';
import { CabCategoriesComponent } from './components/cabmgt/cab-categories/cab-categories.component';
import { CabDashboardComponent } from './components/cabmgt/cab-dashboard/cab-dashboard.component';
import { CalcfareComponent } from './components/calcfare/calcfare.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientComponent } from './components/client/client.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListofClientsComponent } from './components/client/listof-clients/listof-clients.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { DriverComponent } from './components/driver/driver.component';
import { CreateDriverComponent } from './components/driver/create-driver/create-driver.component';
import { ListofDriversComponent } from './components/driver/listof-drivers/listof-drivers.component';
import { DriverDetailComponent } from './components/driver/driver-detail/driver-detail.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { HomeComponent } from './components/home/home.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferclientComponent } from './components/offer/offerclient/offerclient.component';
import { OfferdriverComponent } from './components/offer/offerdriver/offerdriver.component';
import { OffermgtComponent } from './components/offer/offermgt/offermgt.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PayclientComponent } from './components/payment/payclient/payclient.component';
import { PaydriverComponent } from './components/payment/paydriver/paydriver.component';
import { PaymgtComponent } from './components/payment/paymgt/paymgt.component';
import { ResvComponent } from './components/resv/resv.component';
import { ResvcabComponent } from './components/resv/resvcab/resvcab.component';
import { ResvflightComponent } from './components/resv/resvflight/resvflight.component';
import { ResvhotelComponent } from './components/resv/resvhotel/resvhotel.component';
//import { ResvmgtComponent } from './components/resv/resvmgt/resvmgt.component';
import { ResvmgtComponent } from './components/resvmgt/resvmgt.component';
import { ResvCabsComponent } from './components/resvmgt/resv-cabs/resv-cabs.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ResvclientComponent } from './components/resv/resvclient/resvclient.component';
import { ResvdriverComponent } from './components/resv/resvdriver/resvdriver.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full" },
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
  { path:'cab' , children: [
    { path :'', component: CabComponent },
    //{ path :'cabmgt', component: CabmgtComponent },
    { path :'cabcatmgt', component: CabcatmgtComponent },
    { path :'cabcatoth', component: CabcatothComponent },    
    { path :'listofcabs', component: ListofCabsComponent },
    { path :'cabreservn', component: CabReservComponent },
    { path :'cabcategory', component: CabCategoryComponent },
    { path :'cabrequests', component: CabRequestsComponent },
  ]},
  { path:'cabmgt' , children: [
    { path :'', component: CabmgtComponent },
    { path :'cabcategories', component: CabCategoriesComponent },
    { path :'cabdashboard', component: CabDashboardComponent },
  ]},
  { path:'calcfare' , component:CalcfareComponent },
  { path:'cart' , component:CartComponent },
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
  { path:'helpcenter' , component:HelpcenterComponent },
  { path:'home' , component:HomeComponent },
  { path:'offer' , children: [
    { path :'', component: OfferComponent },
    { path :'offerclient', component: OfferclientComponent },    
    { path :'offerdriver', component: OfferdriverComponent },    
    { path :'offermgt', component: OffermgtComponent },
  ]},  
  { path:'payment' , children: [
    { path :'', component: PaymentComponent },
    { path :'payclient', component: PayclientComponent },    
    { path :'paydriver', component: PaydriverComponent },    
    { path :'paymgt', component: PaymgtComponent },
  ]},
  { path:'resv' , children: [
    { path :'', component: ResvComponent },
    { path :'resvcab', component: ResvcabComponent },
    { path :'resvclient', component: ResvclientComponent },    
    { path :'resvdriver', component: ResvdriverComponent },    
    { path :'resvflight', component: ResvflightComponent },    
    { path :'resvhotel', component: ResvhotelComponent },
    //{ path :'resvmgt', component: ResvmgtComponent },
  ]},
  { path:'resvmgt' , children: [
    { path :'', component: ResvmgtComponent },
    { path :'resvcabs', component: ResvCabsComponent },
  ]},
  { path:'wishlist' , component:WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
