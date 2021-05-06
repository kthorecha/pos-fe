import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  productCart: any[] = [
    { product: 'sweater', price: 200, quantity: 2, total: 400},
    { product: 'apple', price: 150, quantity: 2, total: 300},
    { product: 'computer', price: 100, quantity: 2, total: 200},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  updateProductCart(type: string, index: number) {
    console.log(this.productCart)
    if (type == 'plus') {
      this.productCart[index]['quantity'] += 1;
      this.productCart[index]['total'] += this.productCart[index]['price'];
    } else {
      if (this.productCart[index]['quantity'] > 0) {
        this.productCart[index]['quantity'] -= 1;
        this.productCart[index]['total'] -= this.productCart[index]['price'];
      } else {
        delete this.productCart[index];
      }
    }
  }

}
