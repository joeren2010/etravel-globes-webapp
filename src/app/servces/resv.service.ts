import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResvService {
  private urlPostResv:   string = 'http://localhost:4141/resv/storeResv';
  private urlGetAllResv: string = 'http://localhost:4141/resv/findAllResv';
  private urlGetOneResv: string = 'http://localhost:4141/resv/storeResv';
  private urlDelAllResv: string = 'http://localhost:3000/meetings/';
  private urlDelOneResv: string = 'http://localhost:3000/meetings/';
  private urlPutResv:    string = 'http://localhost:3000/meetings/';
  private urlPatchResv:  string = 'http://localhost:3000/meetings/';
  private urlCalResv:    string = 'http://localhost:3000/calen.php/';
  private urlMtgResv:    string = 'http://localhost:3000/calen.php/';
  private urlApiResv:    string = 'https://fakestoreapi.com/projects';
  private urlLocResv:    string = 'http://localhost:3000/meetings';
  private urlComResv:    string = './../../assets/data/meetingsCom.json';

  constructor(private httpClient: HttpClient) { }

  getResv() {
    return this.httpClient.get<any[]>(this.urlGetAllResv);
    //return this.httpClient.get<any[]>('../../assets/data/resv.json');
  }

  storeResv(resv:any): Observable<string>{
    return this.httpClient.post(this.urlPostResv, resv, {responseType:'text'});
  }
}
