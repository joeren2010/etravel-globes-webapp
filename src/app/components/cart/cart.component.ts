import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResvcabService } from 'src/app/servces/resvcab.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public totalItems: number = 0;
  public totalPrice: number = 0;

  constructor(
    public resvcabService: ResvcabService, 
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.calculate();
  }

  addCabToWishlist(cab: any, removeBool: boolean, cabIdx: number) {
  this.resvcabService.addCabToWishlist(cab, removeBool, cabIdx);
  this.calculate();
  }

  saveForLater(cab: any, removeBool: boolean, cabIdx: number) {
  this.resvcabService.saveForLater(cab, removeBool, cabIdx);
  this.calculate();
  }

  removeCabFromCart(cabIdx: number) {
    let elements = this.resvcabService.cabs.splice(cabIdx, 1);
    this.toast.info(elements[0]['title'], "Cab Removed From Cart");
    this.calculate();
  }

  calculate() {
    this.totalItems = this.resvcabService.cabs.reduce((prev, next) => prev + next['quantity'], 0)
    this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }  

}
