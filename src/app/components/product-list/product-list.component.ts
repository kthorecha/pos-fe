import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // productList: any[] = [
  //   { categoryName: 'computer', productName: 'hardisk', description: 'This is product'},
  //   { categoryName: 'computer', productName: 'headphone', description: 'This is product'},
  //   { categoryName: 'clothing', productName: 'shirt', description: 'This is product'},
  //   { categoryName: 'clothing', productName: 'pant', description: 'This is product'},
  //   { categoryName: 'clothing', productName: 'coat', description: 'This is product'},
  //   { categoryName: 'fruits', productName: 'apple', description: 'This is product'},
  // ];
  productList: any[] = [];

  currentTabList: any[] = [];

  // productCategory: any[] = [
  //   { categoryName: 'computer' },
  //   { categoryName: 'clothing' },
  //   { categoryName: 'fruits' },
  // ]
  productCategory: any[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().then((res: any) => {
      console.log('PRRODD==>',res);
      if (res.status == "success") {
        this.productList = res.result;
        this.showTabContent('all');
      }
    }).catch(e => {
      console.log(e);
    });
    this.productService.getAllProductCategories().then((res: any) => {
      if (res.status == "success") {
        this.productCategory = res.result;
      }
    }).catch(e => {
      console.log(e);
    })
  }

  ngOnInit(): void {
  }

  showTabContent(tab: any) {
    console.log(this.productList);
    if (tab !== 'all') {
      this.currentTabList = this.productList.filter((e) => {
        if(e.category == tab) {
          return e;
        }
      });
    } else {
      this.currentTabList = this.productList;
    }
  }

}
