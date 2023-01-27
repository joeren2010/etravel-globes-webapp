import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResvmgtService } from 'src/app/servces/resvmgt.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resvmgt',
  templateUrl: './resvmgt.component.html',
  styleUrls: ['./resvmgt.component.css']
})
export class ResvmgtComponent implements OnInit {
  resvmgtObservable: Observable<any[]> = new Observable();

  constructor(private resvmgtService: ResvmgtService) { }

  resvmgtStatusIdx: number = 0;
  resvmgtStatus: { name: string; value: number }[] = [
    { name: 'Pending', value: 0 },
    { name: 'Approved', value: 1 },
    { name: 'Rejected', value: 2 },
    { name: 'Pickedup', value: 3 },
    { name: 'Droppedoff', value: 4 },
    { name: 'Cancelled', value: 5 },
  ];

  myVar = [];
  selectForm: FormGroup = new FormGroup({});
  resvmgtForm: FormGroup = new FormGroup({});
  selectModel: any;
  viewResvmgtBool: boolean = false;
  viewResvmgtIdx: number | undefined;
  resvmgtModel: any;

  ngOnInit(): void {
    this.resvmgtObservable = this.resvmgtService.getResvmgt();
  }

  changeResvmgtStatus(resvmgtStatusIdx: number) {
    this.resvmgtStatusIdx = resvmgtStatusIdx;
  }

  openViewModal(resvmgtModel: any, viewResvmgtIdx: number) {
    console.log(resvmgtModel);    
    this.viewResvmgtBool = true;
    this.viewResvmgtIdx = viewResvmgtIdx;
    this.resvmgtModel = resvmgtModel;
  }

  closeViewModal() {
    delete this.viewResvmgtIdx;
    delete this.resvmgtModel;
    this.viewResvmgtBool = false;
  }

  changeStatus() {
    //alert("event generated...")                     //to test if saveCab function is working
    let selectRef = this.selectForm.value;        //initializes the variable: cabRef
    console.log(selectRef);                        //checks input values in web's inspect-element
    this.resvmgtService.storeResvmgt(selectRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    })
    //this.selectForm.reset();                       //resets the form 
    
  }

    // save cab into database
  saveResvmgt(){
    //alert("event generated...")                     //to test if saveCab function is working
    let resvmgtRef = this.resvmgtForm.value;        //initializes the variable: cabRef
    console.log(resvmgtRef);                        //checks input values in web's inspect-element
    this.resvmgtService.storeResvmgt(resvmgtRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    })
    //this.resvmgtForm.reset();                       //resets the form 
  }
}


export interface Resvmgt {
  resvmgtId?: string;
  resvmgtDate?: Date;
  clientName?: string;
  clientEmail?: string;
  totalAmount?: number;
  driverName?: string;
  driverId?: string;
  cabId?: string;
  resvmgtStatus?: string;
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