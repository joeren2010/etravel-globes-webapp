import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private urlPostCab:   string = 'http://localhost:8383/cab/storeCab';
  private urlGetAllCab: string = 'http://localhost:8383/cab/findAllCab';
  private urlGetOneCab: string = 'http://localhost:8383/cab/storeCab';
  private urlDelAllCab: string = 'http://localhost:3000/meetings/';
  private urlDelOneCab: string = 'http://localhost:3000/meetings/';
  private urlPutCab:    string = 'http://localhost:3000/meetings/';
  private urlPatchCab:  string = 'http://localhost:3000/meetings/';
  private urlCalCab:    string = 'http://localhost:3000/calen.php/';
  private urlMtgCab:    string = 'http://localhost:3000/calen.php/';
  private urlApiCab:    string = 'https://fakestoreapi.com/projects';
  private urlLocCab:    string = 'http://localhost:3000/meetings';
  private urlComCab:    string = './../../assets/data/meetingsCom.json';

  constructor(private httpClient: HttpClient) { }

  getCab() {
    return this.httpClient.get<any[]>(this.urlGetAllCab);
    //return this.httpClient.get<any[]>('../../assets/json/products.json');
  }

  storeCab(cab:any): Observable<string>{
    return this.httpClient.post(this.urlPostCab, cab, {responseType:'text'});

    /* Usefull Notes:
    * urlPrd: string = 'http://localhost:9090/cab/storeCab' is backend url for admin's signin
    * passes data btw adminsComponent signIn, adminsService signIn and adminController signIn
    * responseType = "text" because our backend (adminsController) codes is returning "string"
    * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
    */
  }
}
