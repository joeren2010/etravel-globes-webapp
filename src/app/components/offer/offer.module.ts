import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferclientComponent } from './offerclient/offerclient.component';
import { OffermgtComponent } from './offermgt/offermgt.component';
import { OfferdriverComponent } from './offerdriver/offerdriver.component';



@NgModule({
  declarations: [
    OfferclientComponent,
    OffermgtComponent,
    OfferdriverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfferModule { }
