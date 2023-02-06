import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResvcabService {
  private urlPostResc:   string = 'http://localhost:8383/resvcab/storeResvcab';
  private urlGetAllResc: string = 'http://localhost:8383/resvcab/findAllResvcab';
  private urlGetOneResc: string = 'http://localhost:8383/resvcab/storeResvcab';
  private urlDelAllResc: string = 'http://localhost:3000/meetings/';
  private urlDelOneResc: string = 'http://localhost:3000/meetings/';
  private urlPutResc:    string = 'http://localhost:3000/meetings/';
  private urlPatchResc:  string = 'http://localhost:3000/meetings/';
  private urlCalResc:    string = 'http://localhost:3000/calen.php/';
  private urlMtgResc:    string = 'http://localhost:3000/calen.php/';
  private urlApiResc:    string = 'https://fakestoreapi.com/projects';
  private urlLocResc:    string = 'http://localhost:3000/meetings';
  private urlComResc:    string = './../../assets/data/meetingsCom.json';

  public cabs:any[] =[];
  public wishlistCabs:any[] =[];
  public cabsRetreived: boolean = false;
  public savedItems: any[] = []; 
  
  public cabsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private httpClient: HttpClient,
    private toast: ToastrService
  ) { }

  storeResc(resc:any): Observable<string>{
    console.log(resc); 
    return this.httpClient.post(this.urlPostResc, resc, {responseType:'text'});
  }

  getCabs() {
    if (!this.cabsRetreived) {
      this.httpClient.get<any[]>('../../assets/data/cab.json')
      //this.httpClient.get<any[]>(this.urlGetAllResc);
        .subscribe((res) => {
          //console.log(res);
          this.cabsSub.next(Object.assign([], res))
          this.cabsRetreived = true
        }
      );
    }
  }


  // add cabs to cart
  addCabToCart(cab:any, cabRemoveBool: boolean = false, cabIdx: number =-1) {
    // add cab into cart for multiple time.
    if(this.cabs.some(x => x["cabId"] === cab["cabId"])) { 
      let idx = this.cabs.findIndex(x=> x["cabId"] === cab["cabId"]);
      this.cabs[idx]["quantity"] +=1;
      this.cabs[idx]["travelCharges"] =this.cabs[idx]["unitPrice"] * this.cabs[idx]["tripDistance"] * this.cabs[idx]["quantity"]
      this.cabs[idx]["itemsSubTotal"] =(this.cabs[idx]["unitPrice"] * this.cabs[idx]["tripDistance"] * this.cabs[idx]["quantity"]) + (this.cabs[idx]["price"] * this.cabs[idx]["quantity"])
      this.toast.info(cab['title'], "Already Added To Cart, Quantity Updated")
    } else{
      this.cabs.push( {
        ...cab,
        "quantity": 1,
        "travelCharges": cab['unitPrice'] * cab['tripDistance'],
        "itemsSubTotal": ( cab['unitPrice'] * cab['tripDistance']) + cab['price'] 
      });
      //console.log(cab['title'], "Cab Added To Cart");
      this.toast.success(cab['title'], "Cab Added To Cart");
    }

    if(cabRemoveBool) {
      this.wishlistCabs.splice(cabIdx, 1);
      this.savedItems.splice(cabIdx, 1);
    }
    // this.cabsSub.next([...this.Cabs]);
  }

  // add cab to whishlist
  addCabToWishlist(cab:any, cabRemoveBool: boolean = false, cabIdx: number =-1) {
    if(!this.wishlistCabs.some(x => x["cabId"] === cab["cabId"])) {
      this.wishlistCabs.push({
        ...cab, "quantity":1
      });
      //console.log(cab['title'], "Cab Added To Wishlist");
      this.toast.success(cab['title'], "Cab Added to Wishlist");
    } else {
      //console.log(cab['title'], "Already Added To Wishlist");
      this.toast.info(cab['title'], "Already Added to Wishlist");
    }
    if(cabRemoveBool) {
      this.cabs.splice(cabIdx, 1);
    }
  }

  saveForLater(cab: any, cabRemoveBool: boolean = false, cabIdx: number = -1) {
    if(!this.savedItems.some(x => x["cabId"] === cab["cabId"])) {
      this.savedItems.push({
        ...cab,
        "quantity": 1
      }); 
      this.toast.success(cab['title'], "Cab Successfully Saved For Later");
    } else {
      this.toast.info(cab['title'], "Cab Already In Saved Items");
    }

    if(cabRemoveBool) {
      this.cabs.splice(cabIdx, 1);
    }
  }

}


  // public unitPrice: number = 0;  
  // public tripDistance: number = 0;
  // public travelCharges: number = 0;
  // public itemsSubTotal: number = 0;  
  // calcTravelCost() {
  //   this.travelCharges = this.cabs.reduce((prev, next) => prev + (next['unitPrice'] * next['tripDistance']), 0);
  //   let travelCost = this.travelCharges;
  //   this.itemsSubTotal = this.cabs.reduce((prev, next) => prev + ((next['price'] + travelCost) * next['quantity']), 0);
  // } 

  // this.calcTravelCost();
  // // add cabs to cart
  // addCabToCart(cab:any, cabRemoveBool: boolean = false, cabIdx: number =-1) {
  //   // add cab into cart for multiple time.
  //   if(this.cabs.some(x => x["cabId"] === cab["cabId"])) { 
  //     let idx = this.cabs.findIndex(x=> x["cabId"] === cab["cabId"]);
  //     this.cabs[idx]["quantity"] +=1;
  //     //console.log(cab['title'], "Already Added To Cart, Quantity Updated");
  //     this.toast.info(cab['title'], "Already Added To Cart, Quantity Updated")
  //   } else{
  //     this.cabs.push( {
  //       ...cab,
  //       "quantity": 1
  //     });
  //     //console.log(cab['title'], "Cab Added To Cart");
  //     this.toast.success(cab['title'], "Cab Added To Cart");
  //   }

  //   if(cabRemoveBool) {
  //     this.wishlistCabs.splice(cabIdx, 1);
  //     this.savedItems.splice(cabIdx, 1);
  //   }
  //   // this.cabsSub.next([...this.cartCabs]);
  // }
