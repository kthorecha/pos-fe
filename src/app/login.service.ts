import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(params: object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json'
  });
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}users/login`;
    this.http.post(url, params, { headers: headers}).subscribe(data => {
      resolve(data);
    }, (err) => {
      reject(err);
    })
  })
  }
}
