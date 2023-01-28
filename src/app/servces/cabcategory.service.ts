import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabcategoryService {
  private urlPostCat:   string = 'http://localhost:8282/cabcategory/storeCategory';
  private urlGetAllCat: string = 'http://localhost:8282/cabcategory/findCategory';
  private urlGetOneCat: string = 'http://localhost:8282/cabcategory/storeCategory';
  private urlDelAllCat: string = 'http://localhost:3000/meetings/';
  private urlDelOneCat: string = 'http://localhost:3000/meetings/';
  private urlPutCat:    string = 'http://localhost:3000/meetings/';
  private urlPatchCat:  string = 'http://localhost:3000/meetings/';
  private urlCalCat:    string = 'http://localhost:3000/calen.php/';
  private urlMtgCat:    string = 'http://localhost:3000/calen.php/';
  private urlApiCat:    string = 'https://fakestoreapi.com/projects';
  private urlLocCat:    string = 'http://localhost:3000/meetings';
  private urlComCat:    string = './../../assets/data/meetingsCom.json';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    //return this.httpClient.get<any[]>(this.urlGetAllCat);
    return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  getCategory() {
    //return this.httpClient.get<any[]>(this.urlGetAllCat);
    return this.httpClient.get<any[]>('../../assets/data/cabcategory.json');
  }

  storeCategory(category:any): Observable<string>{
    return this.httpClient.post(this.urlPostCat, category, {responseType:'text'});

    /* Usefull Notes:
    * urlAdm: string = 'http://localhost:8282/admin/signIn' is backend url for admin's signin
    * passes data btw adminsComponent signIn, adminsService signIn and adminController signIn
    * responseType = "text" because our backend (adminsController) codes is returning "string"
    * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
    */
  }
}
