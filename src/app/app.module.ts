import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
import { ClientModule } from './components/client/client.module';
import { DriverModule } from './components/driver/driver.module';
import { UsersModule } from './components/users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BookcabComponent } from './components/bookcab/bookcab.component';
import { BookingComponent } from './components/booking/booking.component';
import { CalcfareComponent } from './components/calcfare/calcfare.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthService } from './servces/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    SidenavComponent,
    BookcabComponent,
    BookingComponent,
    CalcfareComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AdminModule,
    ClientModule,
    DriverModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
