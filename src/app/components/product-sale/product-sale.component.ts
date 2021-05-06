import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  productCart: any[] = [
    { product: 'sweater', price: 200, quantity: 2, total: 2000},
    { product: 'apple', price: 200, quantity: 2, total: 2000},
    { product: 'computer', price: 200, quantity: 2, total: 2000},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
