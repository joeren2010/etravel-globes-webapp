import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';
import { AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as $ from 'jquery';


@Component({
  selector: 'app-resvcab',
  templateUrl: './resvcab.component.html',
  styleUrls: ['./resvcab.component.css']
})
export class ResvcabComponent implements OnInit {
  fetching: boolean = false;
  cabs:any[]= [];
  cartCabs: any[] = [];
  wishlistCabs: any[] = [];

  rescForm = new FormGroup({
    pickupLoc: new FormControl(),
    pickupDate: new FormControl(), 
    pickupTime: new FormControl(),
    dropoffLoc: new FormControl(), 
    dropoffDate: new FormControl(),
    dropoffTime: new FormControl(), 
    active: new FormControl()
  });

  constructor(
    private resvcabService:ResvcabService,
    public router:Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCabs(); 
    this.getDate()  
  }

    //disable pass-date
  minDate: any = "2022-09-15";     //must use the yyyy-mm-dd format
  getDate(){
    let date = new Date();
    let day: any = date.getDate();    //displays only day = dd
    if(day < 10) {
      day = "0" + day;
    }
    let month: any = date.getMonth() + 1; //displays only month = mm
    if(month < 10) {
      month = "0" + month;
    }
    let year: any = date.getFullYear();    //displays only year
    this.minDate = year + "-" + month + "-" + day
    console.log(this.minDate)
  }   

  getCabs() {
    this.resvcabService.getCabs();
    this.resvcabService.cabsSub.subscribe(res=>{
      console.log(res);
      if(res.length !==0 ) {
        this.cabs = Object.assign([], res);
        this.fetching = false;
        console.log(this.cabs);
      }
    })
  }

  addCabToWishlist(cab:any) {
    this.resvcabService.addCabToWishlist(cab);
  }

  addCabToCart(cab:any) {
    this.resvcabService.addCabToCart(cab);
  }

  // save rescForm into database
  saveResc(){
    let rescData = this.rescForm.value;                   
    console.log(rescData);                                          //console.log(rescData.pickupLoc);                                 
    sessionStorage.setItem('rescData', JSON.stringify(rescData));
    //this.rescForm.reset();                                         //resets the form 
  } 






  // public unitPrice: number = 0;  
  // public tripDistance: number = 0;
  // public travelCharges: number = 0;

  // this.resvcabService.calcTravelCost();

  // calcTravelCost() {
  //   this.travelCharges = this.cabs.reduce((prev, next) => prev + (next['unitPrice'] * next['tripDistance']), 0);
  //   // this.itemsSubTotal = this.cabs.reduce((prev, next) => prev + ((next['price'] + next['travelCharges']) * next['quantity']), 0);
  // } 

  // save rescForm into database
  // saveTravel(){
  //   //alert("event generated...")                         //to test if saveProduct function is working
  //   let travelData = {
  //     this.tripDistance: tripDistance
  //   }
  //   console.log(tripDistance);                                 //checks input values in web's inspect-element
  //   sessionStorage.setItem('tripDistance', JSON.stringify(tripDistance));
  //   //this.rescForm.reset();                       //resets the form 
  // } 

  // getTravelccost() {
  //   this.resvcabService.calcTravelCost();    
  // } 

}