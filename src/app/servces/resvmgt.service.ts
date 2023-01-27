import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResvmgtService {
  private urlPostResm:   string = 'http://localhost:9090/product/storeProduct';
  private urlGetAllResm: string = 'http://localhost:9090/product/findAllProduct';
  private urlGetOneResm: string = 'http://localhost:9090/product/storeProduct';
  private urlDelAllResm: string = 'http://localhost:3000/meetings/';
  private urlDelOneResm: string = 'http://localhost:3000/meetings/';
  private urlPutResm:    string = 'http://localhost:3000/meetings/';
  private urlPatchResm:  string = 'http://localhost:3000/meetings/';
  private urlCalResm:    string = 'http://localhost:3000/calen.php/';
  private urlMtgResm:    string = 'http://localhost:3000/calen.php/';
  private urlApiResm:    string = 'https://fakestoreapi.com/projects';
  private urlLocResm:    string = 'http://localhost:3000/meetings';
  private urlComResm:    string = './../../assets/data/meetingsCom.json';

  constructor(private httpClient: HttpClient) { }

  getResvmgt() {
    //return this.httpClient.get<any[]>(this.urlGetAllResm);
    return this.httpClient.get<any[]>('../../assets/data/resvmgt.json');
  }

  storeResvmgt(resm:any): Observable<string>{
    return this.httpClient.post(this.urlPostResm, resm, {responseType:'text'});

    /* Usefull Notes:
    * urlPrd: string = 'http://localhost:9090/cab/storeCab' is backend url for admin's signin
    * passes data btw adminsComponent signIn, adminsService signIn and adminController signIn
    * responseType = "text" because our backend (adminsController) codes is returning "string"
    * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
    */
  }
}
