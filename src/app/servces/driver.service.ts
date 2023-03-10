//import { AuthService } from 'src/app/servces/auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private urlPostDvrs:   string = 'http://localhost:9191/driver/signUp';
  private urlPostDvr:   string = 'http://localhost:9191/driver/signIn';
  private urlGetAllDvr: string = 'http://localhost:9191/driver/findAllDriver';
  private urlGetOneDvr: string = 'http://localhost:9191/driver/findDriverById';
  private urlDelAllDvr: string = 'http://localhost:3000/meetings/';
  private urlDelOneDvr: string = 'http://localhost:3000/meetings/';
  private urlPutDvr:    string = 'http://localhost:3000/meetings/';
  private urlPatchDvr:  string = 'http://localhost:3000/meetings/';
  private urlCalDvr:    string = 'http://localhost:3000/calen.php/';
  private urlMtgDvr:    string = 'http://localhost:3000/calen.php/';
  private urlApiDvr:    string = 'https://fakestoreapi.com/projects';
  private urlLocDvr:    string = 'http://localhost:3000/meetings';
  private urlComDvr:    string = './../../assets/data/meetingsCom.json';

  private obj = new BehaviorSubject<boolean>(false);        //instantiate behavior-subject: obj
  private loggedIn = this.obj.asObservable();               //create custom-observale: loggedIn
  private loggedInDriver = this.obj.asObservable();          //create custom-observale: loggedInAdmin

  constructor(
    public httpClient: HttpClient,
    //public authService:AuthService
  ) { }

  signIn(driver:any):Observable<string>{
    return this.httpClient.post(this.urlPostDvr, driver, {responseType:'text'});
  }

  get isLogged(){
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  get isLoggedDriver(){
    return this.loggedInDriver;       //default value set to false (see behavior-subject line)
  }

  logIn(){
    this.obj.next(true);         //when called... returns "true"    
  }
  logOut(){
    this.obj.next(false);        //when called... returns "false" 
  }

  signUp(driver:any):Observable<string>{
    return this.httpClient.post(this.urlPostDvrs, driver, {responseType:'text'});
  }  

}
