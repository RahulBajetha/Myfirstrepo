import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productname:string = "Kit Kat";
  product_No:number = 456;
  quantity: number= 136;
  price :number= 40.3;
  mfd : any = new Date();
  amount : any = this.price * this.quantity;

  products:Product[]=[
    {Productname: 'Vadilal',Price:34,quantity:456, mfd: new Date('12-04-2022')},
    {Productname: 'Creambell',Price:10,quantity:456, mfd: new Date('12-04-2022')},
    {Productname: 'Mother Dairy',Price:12,quantity:456, mfd: new Date('12-04-2022')}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
