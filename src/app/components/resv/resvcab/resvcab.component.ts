import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';


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

  constructor(private resvcabService:ResvcabService) { }

  ngOnInit(): void {
    this.getCabs();
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
}
