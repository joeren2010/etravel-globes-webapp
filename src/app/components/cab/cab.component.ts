import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CabService } from 'src/app/servces/cab.service';
import { CabcategoryService } from 'src/app/servces/cabcategory.service';


@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {
  public cabObservable: Observable<any[]> = new Observable();
  public cabcategoryObservable: Observable<any[]> = new Observable();

  cabForm: FormGroup = new FormGroup({});
  cabModel: Cab | undefined;
  selectedImageIdx: number = 0;
  thumbnailImageIdx: number = 0;
  tempImageFiles: any[] = [];
  tempImageFilesPath:any[] = [];
  updation: boolean = false;
  loader: boolean = false;

  constructor(
    private cabService: CabService, 
    private cabcategoryService:CabcategoryService, 
    private modalService: NgbModal, 
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cabObservable = this.cabService.getCab();
    this.cabcategoryObservable = this.cabcategoryService.getCategory();    
  }


  openModal(modal: any, cab: Cab | null = null) {
    this.tempImageFiles = []; 
    this.initialiseModal(cab);
    this.modalService.open(modal, { size: "xl" });
  }


  initialiseModal(cabObj: Cab | null) {
    if (cabObj == null) {
      this.updation = false;
      this.cabForm = this.fb.group({
        cabId: [],
        cabTitle: [null],
        price: [null],
        cabCode: [null],
        images: this.fb.array([]),
        thumbnailImage: [null],
        cabDescription: [null],
        cabCategory: [null],
        active: [true],
        addedOn: [],
        rating: [0]
      });
    } else {
      this.updation = true;
      this.cabForm = this.fb.group({
        cabId: [cabObj.cabId],
        cabTitle: [cabObj.cabTitle],
        price: [cabObj.price],
        cabCode: [cabObj.cabCode],
        images: [cabObj.images],
        thumbnailImage: [cabObj.thumbnailImage],
        cabDescription: [cabObj.cabDescription],
        cabCategory: [cabObj.cabCategory],
        active: [cabObj.active],
        addedOn: [cabObj.addedOn],
        rating: [cabObj.rating]
      });
      this.onSelectOption(cabObj.cabCategory);
      this.tempImageFiles = cabObj.images || [];
    }
  }

  compareByCategoryId(category1: cabCategory, category2: cabCategory) {
    return category1 && category2 && category1.categoryId === category2.categoryId;
  }

  onSelectOption(category: cabCategory | Event | undefined) {
    // this.cabForm.patchValue({
    //   category: this.category.find(x => x.categoryId === category.categoryId)
    // })
  }

  // view image model
  openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
    this.tempImageFiles = [...imageUrls];
    this.thumbnailImageIdx = thumbnailImageIdx;
    this.modalService.open(modal, { 
      size: "xl",
      scrollable: true 
    });
  }

  // open image
  openImage(url: string) {
    window.open(url, "_blank")
  }

  // view cab details
  viewCabDetails(modal: any, cabObj: Cab) {
    this.cabModel = cabObj;
    this.modalService.open(modal, { size: 'lg' });
  }

  checkImageFileType(event: any) {
    let fileList: File[] = Object.assign([], event.target.files);
    fileList.forEach((file: any, idx: number) => {
      if (
        file.type == "image/png" ||
        file.type == "image/jpeg" ||
        file.type == "image/jpg"
      ) {
        let reader = new FileReader();                     //instantiate file-reader variable: reader
        reader.readAsDataURL(event.target.files[0]);
        reader.onload=(event) => {
          let path = (<FileReader>event.target).result;    //create variable "path" and assign the results from file-reader to it
          this.tempImageFilesPath.push(path);
        }
        this.tempImageFiles.push(file);
      } else {
        // this.toast.warning("Only .png/.jpeg/.jpg file format accepted!!", file.name + " will not accepted.");
      }
    });
  }

  changeThumbnailImageIdx(idx: number) {
    this.cabForm.patchValue({
      thumbnailImage: idx
    })
  }

  removeImage(idx: number) {
    this.tempImageFiles.splice(idx, 1);
  }

  // save cab into database
  saveCab(){
    //alert("event generated...")                     //to test if saveCab function is working
    let cabRef = this.cabForm.value;        //initializes the variable: cabRef
    this.tempImageFilesPath.forEach((v, index) => {
      cabRef.images[index]=v;    
    })
    console.log(cabRef);                        //checks input values in web's inspect-element
    this.cabService.storeCab(cabRef).subscribe({
      next:(result:any) => console.log(result),
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    })
    //this.cabForm.reset();                       //resets the form 
    this.tempImageFiles.splice(0,this.tempImageFiles.length);   //reset the array 
    this.tempImageFilesPath.splice(0,this.tempImageFiles.length); //reset the array 
    cabRef.images.splice(0,cabRef.image.length);        // reset the array
  }

}


export interface Cab {
  cabId?: string;
  cabTitle?: string;
  cabCode?: string;
  cabDescription?: string;
  price?: number;
  cabCategory?: cabCategory;
  images?: string[];
  thumbnailImage?: number;
  active?: boolean;
  addedOn?: Date;
  rating?: number;
}

export interface cabCategory {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  categoryImageUrl?: string;
  active?: boolean;
  createdOn?: Date;
}
