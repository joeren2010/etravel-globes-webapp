import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlPostClts: string = 'http://localhost:8181/client/signUp';    
  private urlPostClt:   string = 'http://localhost:8181/client/signIn';
  private urlGetAllClt: string = 'http://localhost:8181/client/findAllClient';
  private urlGetOneClt: string = 'http://localhost:8181/client/findClientById';
  private urlDelAllClt: string = 'http://localhost:3000/meetings/';
  private urlDelOneClt: string = 'http://localhost:3000/meetings/';
  private urlPutClt:    string = 'http://localhost:3000/meetings/';
  private urlPatchClt:  string = 'http://localhost:3000/meetings/';
  private urlCalClt:    string = 'http://localhost:3000/calen.php/';
  private urlMtgClt:    string = 'http://localhost:3000/calen.php/';
  private urlApiClt:    string = 'https://fakestoreapi.com/projects';
  private urlLocClt:    string = 'http://localhost:3000/meetings';
  private urlComClt:    string = './../../assets/data/meetingsCom.json';


  private obj = new BehaviorSubject<boolean>(false);          //instantiate behavior-subject: obj
  private loggedIn = this.obj.asObservable();               //create custom-observale: loggedIn
  private loggedInClient = this.obj.asObservable();           //create custom-observale: loggedIn

  constructor(
    public httpClient: HttpClient,
    //public authService:AuthService
  ) { }

  signIn(client:any):Observable<string>{
    return this.httpClient.post(this.urlPostClt, client, {responseType:'text'});
  }

  get isLogged(){
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  get isLoggedClient(){
    return this.loggedInClient;       //default value set to false (see behavior-subject line)
  }

  logIn(){
    this.obj.next(true);         //when called... returns "true"    
  }
  logOut(){
    this.obj.next(false);        //when called... returns "false" 
  }

  signUp(client:any):Observable<string>{
    return this.httpClient.post(this.urlPostClts, client, {responseType:'text'});
  }  

}
