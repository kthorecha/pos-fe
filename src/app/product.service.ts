import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  token: any = sessionStorage.getItem('LoggedInUser');

  constructor(private http: HttpClient) { }

  getAllProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
      'auth-token': this.token
  });
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}product`, { headers: headers}).subscribe((res: any) => {
        if (res.status == "success") {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      })
    })
  }

  getAllProductCategories() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
      'auth-token': this.token
  });
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}product-category`, { headers: headers}).subscribe((res: any) => {
        if (res.status == "success") {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      })
    })
  }
}
