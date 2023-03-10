//import { AuthService } from 'src/app/servces/auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //api url - admin (see below for template to use in future)
  private urlPostAdms:   string = 'http://localhost:6161/admin/signUp';  
  private urlPostAdm:   string = 'http://localhost:6161/admin/signIn';
  private urlGetAllAdm: string = 'http://localhost:6161/admin/findAllAdmin';
  private urlGetOneAdm: string = 'http://localhost:6161/admin/findAdminById/';
  private urlDelAllAdm: string = 'http://localhost:3000/meetings/';
  private urlDelOneAdm: string = 'http://localhost:3000/meetings/';
  private urlPutAdm:    string = 'http://localhost:3000/meetings/';
  private urlPatchAdm:  string = 'http://localhost:3000/meetings/';
  private urlCalAdm:    string = 'http://localhost:3000/calen.php/';
  private urlMtgAdm:    string = 'http://localhost:3000/calen.php/';
  private urlApiAdm:    string = 'https://fakestoreapi.com/projects';
  private urlLocAdm:    string = 'http://localhost:3000/meetings';
  private urlComAdm:    string = './../../assets/data/meetingsCom.json';

  private obj = new BehaviorSubject<boolean>(false);        //instantiate behavior-subject: obj
  private loggedIn = this.obj.asObservable();               //create custom-observale: loggedIn
  private loggedInAdmin = this.obj.asObservable();          //create custom-observale: loggedInAdmin

  constructor(
    public httpClient: HttpClient,
    //public authService:AuthService
  ) { }

  signIn(admin:any):Observable<string>{
    return this.httpClient.post(this.urlPostAdm, admin, {responseType:'text'});

    /* Usefull Notes:
    * urlAdm: string = 'http://localhost:6161/admin/signIn' is backend url for admin's signin
    * passes data btw adminsComponent signIn, adminsService signIn and adminController signIn
    * responseType = "text" because our backend (adminsController) codes is returning "string"
    * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
    */
  }

  get isLogged(){
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  get isLoggedAdmin(){
    return this.loggedInAdmin;       //default value set to false (see behavior-subject line)
  }

  logIn(){
    this.obj.next(true);         //when called... returns "true"
  }
  logOut(){
    this.obj.next(false);        //when called... returns "false" 
  }

  signUp(admin:any):Observable<string>{
    return this.httpClient.post(this.urlPostAdms, admin, {responseType:'text'});
  }  
  
}
  // api url - admin... for future, please use below:
  // private urlPostAdms:   string = 'http://localhost:6161/admin/signIn';
  // private urlPostAdm:   string = 'http://localhost:6161/admin/signUp';  
  // private urlGetAllAdm: string = 'http://localhost:6161/admin/findAdminAll';
  // private urlGetOneAdm: string = 'http://localhost:6161/admin/findAdminById/';
  // private urlDelAllAdm: string = 'http://localhost:6161/admin/deleteAdminAll';
  // private urlDelOneAdm: string = 'http://localhost:6161/admin/deleteAdminById/';
  // private urlPutAdm:    string = 'http://localhost:3000/meetings/';
  // private urlPatchAdm:  string = 'http://localhost:3000/meetings/';
  // private urlCalAdm:    string = 'http://localhost:3000/calen.php/';
  // private urlMtgAdm:    string = 'http://localhost:3000/calen.php/';
  // private urlApiAdm:    string = 'https://fakestoreapi.com/projects';
  // private urlLocAdm:    string = 'http://localhost:3000/meetings';
  // private urlComAdm:    string = './../../assets/data/meetingsCom.json';
