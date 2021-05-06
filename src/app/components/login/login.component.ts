import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { AuthserviceService } from 'src/app/_auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private loginService: LoginService, private authService: AuthserviceService) { 
    this.loginForm = formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') !== null) {
      this.router.navigate(['dashboard'], { replaceUrl: true });
    }
  }

  doLogin() {
    // console.log(this.loginForm.value.username, this.loginForm.value.password)
    let { username, password } = this.loginForm.value;
    let loginObj = {
      username: username,
      password: password
    }
    // console.log(username,password)
    this.loginService.login(loginObj).then((res: any) => {
      if(res.status == "success") {
        console.log(res);
        this.authService.setToken(res.result);
        this.router.navigate(['home']);
      } else {
        alert('Error while login!')
      }
    }).catch(e => {
      console.log('errr==>',e)
    })
  }

}
