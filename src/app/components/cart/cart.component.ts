import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  // getRescData(){
  //   let jsonData: any = sessionStorage.getItem('rescData');
  //   let obj = JSON.parse(jsonData);
  //   return jsonData;
  // }
  getPickupLoc(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.pickupLoc;
  }
  getPickupDate(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.pickupDate;
  }
  getPickupTime(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.pickupTime;
  }
  getDropoffLoc(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.dropoffLoc;
  }
  getDropoffDate(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.dropoffDate;
  }
  getDropoffTime(){
    let jsonData: any = sessionStorage.getItem('rescData');
    let obj = JSON.parse(jsonData);
    return obj.dropoffTime;
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
    this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + ((next['price'] * next['quantity']) + (next['unitPrice'] * (next['tripDistance'] * next['quantity']))), 0);
    // this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }  

}



  // addCabToCart(cab: any, removeBool: boolean, cabIdx: number) {
  //   this.resvcabService.addCabToCart(cab, removeBool, cabIdx);
  //   //this.travelcost();
  //   // this.subtotal();
  // }

  // travelcost() {
  //   this.travelCharges = this.resvcabService.cabs.reduce((prev, next) => prev + next['quantity'], 0)
  //   this.resvcabService.cabs.forEach((cab: any) => {
  //     this.travelCharges = cab.unitPrice * (cab.tripDistance * cab.quantity);
  //         console.log(cab.unitPrice);
  //         console.log(cab.tripDistance);
  //         console.log(cab.quantity);
  //   });
  //   console.log(this.travelCharges);
  //   //return this.travelCharges;
  //         this.resvcabService.cabs.push( {
  //       //...cab,
  //         })
  // }   

  // subtotal() {
  //   this.resvcabService.cabs.forEach((cab: any) => {
  //     this.itemsSubTotal = (cab.price * cab.quantity) + this.travelCharges;
  //   });
  //   //console.log(this.itemsSubTotal);
  //   return this.itemsSubTotal;
  // }  
  // travelcost() {
  //   this.resvcabService.cabs.forEach((cab: any) => {
  //     this.travelCharges = cab.unitPrice * (cab.tripDistance * cab.quantity);
  //         console.log(cab.unitPrice);
  //         console.log(cab.tripDistance);
  //         console.log(cab.quantity);
  //   });
  //   console.log(this.travelCharges);
  //   return this.travelCharges;
  // }  

  // subtotal() {
  //   this.resvcabService.cabs.forEach((cab: any) => {
  //     this.itemsSubTotal = (cab.price * cab.quantity) + this.travelCharges;
  //   });
  //   //console.log(this.itemsSubTotal);
  //   return this.itemsSubTotal;
  // }  

    
  // calculate() {
  //   this.totalItems = this.resvcabService.cabs.reduce((prev, next) => prev + next['quantity'], 0)
  //   this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next[this.itemsSubTotal]), 0);
  //   // this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  // }  

//this.travelcost();
//this.subtotal();

// public unitPrice: number = 0;  
// public tripDistance: number = 0;
// public travelCharges: number = 0;
// public itemsSubTotal: number = 0;
// public quantity: number = 0;

//this.travelCharges = 50;
//this.travelCharges = this.resvcabService.cabs.reduce((prev, next) => prev + (next['unitPrice'] * next['tripDistance']), 0);
// let travelCharges = this.travelCharges;
// let unitPrice = this.unitPrice;
// let tripDistance = this.tripDistance;
// travelCharges = unitPrice * this.tripDistance;
//let travelCost = this.travelCharges;
//this.itemsSubTotal = this.resvcabService.cabs.reduce((prev, next) => prev + ((next['price'] + travelCost) * next['quantity']), 0);

// let travelCost = this.resvcabService.cabs.reduce((prev, next) => prev + (next['unitPrice'] * next['tripDistance']), 0);
// this.travelCharges = travelCost;
// this.itemsSubTotal = this.resvcabService.cabs.reduce((prev, next) => prev + ((next['price'] + next['travelCharges']) * next['quantity']), 0);

    // calcTravelCost() {
//   //for(let cabIdx: number = 0; cabIdx<cab.length; cabIdx++) 
//   this.resvcabService.cabs.forEach((_e: any) => {
//     this.travelCharges = (_e.unitPrice * _e.tripDistance);
//   });
//   console.log(this.travelCharges);
//   return this.travelCharges;
// }  


// calcTravelCost() {
//   //for(let cabIdx: number = 0; cabIdx<cab.length; cabIdx++) 
//   this.travelCharges = 0;
//   this.resvcabService.cabs.forEach((_e: any) => {
//     this.travelCharges = (_e.unitPrice * _e.tripDistance) * _e.quantity;
//   });
//   console.log(this.travelCharges);
//   return this.travelCharges;
// } 

