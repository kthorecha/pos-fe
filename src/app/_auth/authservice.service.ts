import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router) { }

  setToken(token: any) {
    return sessionStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    return sessionStorage.getItem('LoggedInUser');
  }

  setUserType(user: any) {
    return sessionStorage.setItem('userType', user);
  }

  getUserType() {
    return sessionStorage.getItem('userType');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    sessionStorage.clear();
    sessionStorage.removeItem('LoggedInUser');
    this.router.navigate(['']);
  }
}
