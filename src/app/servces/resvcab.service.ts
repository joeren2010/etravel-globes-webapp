import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResvcabService {
  private urlPostResc:   string = 'http://localhost:4242/resvcab/storeResvcab';
  private urlGetAllCab: string =  'http://localhost:7171/cab/findAllCab';
  private urlGetAllResc: string = 'http://localhost:4242/resvcab/findAllResvcab';
  private urlGetOneResc: string = 'http://localhost:4242/resvcab/storeResvcab';
  private urlDelAllResc: string = 'http://localhost:3000/meetings/';
  private urlDelOneResc: string = 'http://localhost:3000/meetings/';
  private urlPutResc:    string = 'http://localhost:3000/meetings/';
  private urlPatchResc:  string = 'http://localhost:3000/meetings/';
  private urlCalResc:    string = 'http://localhost:3000/calen.php/';
  private urlMtgResc:    string = 'http://localhost:3000/calen.php/';
  private urlApiResc:    string = 'https://fakestoreapi.com/projects';
  private urlLocResc:    string = 'http://localhost:3000/cabs';
  private urlComResc:    string = './../assets/data/cab.json';

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

  // //for json server and json.file - DO NOT DELETE
  // storeResc(resc: any): Observable<any>{
  //   console.log(resc);
  //   return this.httpClient.post<any[]>(this.urlLocResc, resc);
  //   //this.httpClient.post<any[]>('../../assets/data/cab.json', resc)    
  // } 

  getCabs() {
    if (!this.cabsRetreived) {
      this.httpClient.get<any[]>(this.urlGetAllCab)
      //this.httpClient.get<any[]>('../../assets/data/cab.json')
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
      let jsonData: any = sessionStorage.getItem('rescData');
      let jsonObj = JSON.parse(jsonData);
      this.cabs[idx]["pickupLoc"] = jsonObj.pickupLoc;
      this.cabs[idx]["pickupDate"] = jsonObj.pickupDate;
      this.cabs[idx]["pickupTime"] = jsonObj.pickupTime;
      this.cabs[idx]["dropoffLoc"] = jsonObj.dropoffLoc;
      this.cabs[idx]["dropoffDate"] = jsonObj.dropoffDate;
      this.cabs[idx]["dropoffTime"] = jsonObj.dropoffTime;
      this.cabs[idx]["tripDistance"] = jsonObj.tripDistance;
      this.cabs[idx]["travelCharges"] =this.cabs[idx]["unitPrice"] * this.cabs[idx]["tripDistance"] * this.cabs[idx]["quantity"];
      this.cabs[idx]["itemsSubTotal"] =(this.cabs[idx]["unitPrice"] * this.cabs[idx]["tripDistance"] * this.cabs[idx]["quantity"]) + (this.cabs[idx]["price"] * this.cabs[idx]["quantity"])
      this.toast.info(cab['title'], "Already Added To Cart, Quantity Updated")
    } else{ 
      let jsonData: any = sessionStorage.getItem('rescData');
      let jsonObj = JSON.parse(jsonData);  
      this.cabs.push( {
        ...cab,
        "quantity": 1,
        "pickupLoc":  jsonObj.pickupLoc,  
        "pickupDate":  jsonObj.pickupDate,  
        "pickupTime":  jsonObj.pickupTime,  
        "dropoffLoc":  jsonObj.dropoffLoc,  
        "dropoffDate":  jsonObj.dropoffDate,  
        "dropoffTime":  jsonObj.dropoffTime,  
        "tripDistance":  jsonObj.tripDistance,  
        "travelCharges": cab['unitPrice'] * jsonObj.tripDistance,
        "itemsSubTotal": (cab['unitPrice'] * jsonObj.tripDistance) + cab['price'], 
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

  saveLocalCart(){
    sessionStorage.setItem('cartData', JSON.stringify(this.cabs));
  }  

  // add cab to whishlist
  addCabToWishlist(cab:any, cabRemoveBool: boolean = false, cabIdx: number =-1) {
    if(!this.wishlistCabs.some(x => x["cabId"] === cab["cabId"])) {
      this.wishlistCabs.push({
        ...cab, "quantity":1
      });
      this.toast.success(cab['title'], "Cab Added to Wishlist");
    } else {
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
