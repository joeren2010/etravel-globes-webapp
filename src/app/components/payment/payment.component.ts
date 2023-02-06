import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalPrice: number = 0;

  cardImages: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
  ];

  constructor(
    public resvcabService: ResvcabService,
  ) { }

  ngOnInit(): void {
    this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }

}


  // rescRef: any[] = [];
  //rescForm: FormGroup = new FormGroup({});

  // rescForm = new FormGroup({
  //   pickupLoc: new FormControl(),
  //   pickupDate: new FormControl(), 
  //   pickupTime: new FormControl(),
  //   dropoffLoc: new FormControl(), 
  //   dropoffDate: new FormControl(),
  //   dropoffTime: new FormControl(), 
  //   active: new FormControl()
  // });


  // interface Rescdata {
//   pickupLoc?: string;
//   pickupDate?: Date;
//   pickupTime?: string;
//   dropoffLoc?: string;
//   dropoffDate?: Date;
//   dropoffTime?: string;
//   active?: boolean;
// }



// $("#pickupLoc").on('keyup change', function(){
//   if($(this).val() != ""){
//     let values = $(this).serialize();
//     $("#pickupLocVal").html(values).val();
//     $(".pickupLoc").show();
//   }else{
//     $(".pickupLoc").hide();
//   }
//   //console.log($('#pickupLoc').val());
// });
// $("#age").on('blur', function(){
//   if($(this).val() != ""){
//     $("#ageVal").text($(this).val());
//     $(".age").show();
//   }else{
//     $(".age").hide();
//   }
// });
// $("#gender").on('change', function(){
//   if($(this).val() != ""){
//     $("#genderVal").text($("#gender option:selected").text());
//     $(".gender").show();
//   }else{
//     $(".gender").hide();
//   }
// });

  // initialiseForm(rescObj: Rescdata | null) {
  //   if (rescObj == null) {
  //     //this.updation = false;
  //     this.rescForm = this.formBuilder.group({
  //       pickupLoc: [null],     
  //       pickupDate: [],
  //       pickupTime: [],
  //       dropoffLoc: [null],     
  //       dropoffDate: [],
  //       dropoffTime: [],
  //     });
  //   } else {
  //     //this.updation = true;
  //     this.rescForm = this.formBuilder.group({
  //       pickupLoc: [rescObj.pickupLoc],
  //       pickupDate: [rescObj.pickupDate],
  //       pickupTime: [rescObj.pickupTime],
  //       dropoffLoc: [rescObj.dropoffLoc],
  //       dropoffDate: [rescObj.dropoffDate],
  //       dropoffTime: [rescObj.dropoffTime],
  //     });
  //   }
  // } 

  
  // // save rescForm into database
  // saveResc(){
  //   //alert("event generated...")                         //to test if saveProduct function is working
  //   let rescData = this.rescForm.value;                    //initializes the variable: productRef 
  //   console.log(rescData);                                 //checks input values in web's inspect-element
  //   sessionStorage.setItem('rescData', JSON.stringify(rescData));
  //   //this.rescForm.reset();                       //resets the form 
  // }  

