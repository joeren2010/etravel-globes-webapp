import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
import { CabModule } from './components/cab/cab.module';
import { ClientModule } from './components/client/client.module';
import { DriverModule } from './components/driver/driver.module';
import { PaymentModule } from './components/payment/payment.module';
import { OfferModule } from './components/offer/offer.module';
import { ResvModule } from './components/resv/resv.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavsideComponent } from './components/navside/navside.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CalcfareComponent } from './components/calcfare/calcfare.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HelpcenterComponent,    
    HomeComponent,
    NavbarComponent,
    NavsideComponent,
    NotfoundComponent,
    WishlistComponent,
    CalcfareComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AdminModule,
    CabModule,
    ClientModule,
    DriverModule,
    PaymentModule,
    OfferModule,
    ResvModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
