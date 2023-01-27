import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PayclientComponent } from './payclient/payclient.component';
import { PaydriverComponent } from './paydriver/paydriver.component';
import { PaymgtComponent } from './paymgt/paymgt.component';



@NgModule({
  declarations: [
    PaymentComponent,
    PayclientComponent,
    PaydriverComponent,
    PaymgtComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
