import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResvService } from 'src/app/servces/resv.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-resv',
  templateUrl: './resv.component.html',
  styleUrls: ['./resv.component.css']
})
export class ResvComponent implements OnInit {
  resvObservable: Observable<any[]> = new Observable();

  constructor(private resvService: ResvService) { }

  resvStatusIdx: number = 0;
  resvStatus: { name: string; value: number }[] = [
    { name: 'Pending', value: 0 },
    { name: 'Approved', value: 1 },
    { name: 'Rejected', value: 2 },
    { name: 'Pickedup', value: 3 },
    { name: 'Droppedoff', value: 4 },
    { name: 'Cancelled', value: 5 },
  ];

  myVar = [];
  selectForm: FormGroup = new FormGroup({});
  resvForm: FormGroup = new FormGroup({});
  selectModel: any;
  viewResvBool: boolean = false;
  viewResvIdx: number | undefined;
  resvModel: any;

  ngOnInit(): void {
    this.resvObservable = this.resvService.getResv();
  }

  changeResvStatus(resvStatusIdx: number) {
    this.resvStatusIdx = resvStatusIdx;
  }

  openViewModal(resvModel: any, viewResvIdx: number) {
    console.log(resvModel);    
    this.viewResvBool = true;
    this.viewResvIdx = viewResvIdx;
    this.resvModel = resvModel;
  }

  closeViewModal() {
    delete this.viewResvIdx;
    delete this.resvModel;
    this.viewResvBool = false;
  }

  changeStatus() {
    //alert("event generated...")                     //to test if saveCab function is working
    let selectRef = this.selectForm.value;        //initializes the variable: cabRef
    console.log(selectRef);                        //checks input values in web's inspect-element
    this.resvService.storeResv(selectRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    })
    //this.selectForm.reset();                       //resets the form 
    
  }

    // save resv into database
  saveResv(){
    //alert("event generated...")                     //to test if saveCab function is working
    let resvRef = this.resvForm.value;             //initializes the variable: cabRef
    console.log(resvRef);                             //checks input values in web's inspect-element
    this.resvService.storeResv(resvRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    })
    //this.resvForm.reset();                       //resets the form 
  }
}


export interface Resv {
  resvId?: string;
  resvDate?: Date;
  clientName?: string;
  clientEmail?: string;
  totalAmount?: number;
  driverName?: string;
  driverId?: string;
  cabId?: string;
  resvStatus?: string;
  cabTitle?: string;
  price?: number;
  quantity?: number;
  totalPrice?: number;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  categoryImageUrl?: string;
  active?: boolean;
  createdOn?: Date;
}
