import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlPostCart:   string = 'http://localhost:5151/cart/storeCart';
  private urlGetAllCart: string = 'http://localhost:5151/cart/findAllCart';
  private urlGetOneCart: string = 'http://localhost:5151/cart/findCartById';
  private urlDelAllCart: string = 'http://localhost:5151/cart/deleteAll';
  private urlDelOneCart: string = 'http://localhost:5151/cart/deleteCartById/';
  private urlPutCart:    string = 'http://localhost:3000/meetings/';
  private urlPatchCart:  string = 'http://localhost:3000/meetings/';
  private urlCalCart:    string = 'http://localhost:3000/calen.php/';
  private urlMtgCart:    string = 'http://localhost:3000/calen.php/';
  private urlApiCart:    string = 'https://fakestoreapi.com/projects';
  private urlLocCart:    string = 'http://localhost:3000/cart';
  private urlComCart:    string = './../assets/data/cart.json';

  public carts:any[] =[];
  //public wishlistCabs:any[] =[];
  public cartsRetreived: boolean = false;
  //public savedItems: any[] = []; 
  
  public cartsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private httpClient: HttpClient,
    private toast: ToastrService
  ) { }

  getAllCart() {
    return this.httpClient.get<any[]>(this.urlGetAllCart);
    //return this.httpClient.get<any[]>('../../assets/data/cab.json');
  }  

  getOneCart(cartId:any): Observable<string>{
    return this.httpClient.get(this.urlGetOneCart+cartId,{responseType:'text'});
    //return this.httpClient.get<any[]>('../../assets/data/cart.json');
  }

  //for string media-type - DO NOT DELETE
  storeCart(cart:any): Observable<string>{
    console.log(cart); 
    return this.httpClient.post(this.urlPostCart, cart, {responseType:'text'});
  }

  // //for json server and json.file - DO NOT DELETE
  // storeCart(cart: any): Observable<any>{
  //   console.log(cart);
  //   return this.httpClient.post(this.urlPostCart, cart);
  //   //return this.httpClient.post<any[]>(this.urlLocCart, cart);
  //   //this.httpClient.post<any[]>('../../assets/data/cart.json', cart)    
  // } 

  deleteCart(cartId:any):Observable<string>{
    return this.httpClient.delete(this.urlDelOneCart+cartId,{responseType:'text'});
  }

  getAllCarts() {
    if (!this.cartsRetreived) {
      this.httpClient.get<any[]>(this.urlGetAllCart)
      //this.httpClient.get<any[]>('../../assets/data/cart.json')
        .subscribe((res) => {
          //console.log(res);
          this.cartsSub.next(Object.assign([], res))
          this.cartsRetreived = true
        }
      );
    }
  } 
}
