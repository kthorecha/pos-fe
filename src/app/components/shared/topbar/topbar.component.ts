import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/_auth/authservice.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.logout();
  }

}
