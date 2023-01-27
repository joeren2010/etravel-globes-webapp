import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResvcabComponent } from './resvcab/resvcab.component';
import { ResvhotelComponent } from './resvhotel/resvhotel.component';
import { ResvflightComponent } from './resvflight/resvflight.component';
import { ResvmgtComponent } from './resvmgt/resvmgt.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ResvcartComponent } from './resvcart/resvcart.component';
import { ResvclientComponent } from './resvclient/resvclient.component';
import { ResvdriverComponent } from './resvdriver/resvdriver.component';



@NgModule({
  declarations: [
    ResvcabComponent,
    ResvhotelComponent,
    ResvflightComponent,
    ResvmgtComponent,
    CartComponent,
    WishlistComponent,
    ResvcartComponent,
    ResvclientComponent,
    ResvdriverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResvModule { }
