import { Component, OnInit } from '@angular/core';
import { ResvcabService } from 'src/app/servces/resvcab.service';

@Component({
  selector: 'app-payclient',
  templateUrl: './payclient.component.html',
  styleUrls: ['./payclient.component.css']
})
export class PayclientComponent implements OnInit {

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
