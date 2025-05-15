import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName: string='';

  constructor(private apiService:ApiserviceService) { }

  ngOnInit(): void {

    const user = this.apiService.getUserDetails();
    console.log("USer in head" , user);

    this.userName = user.username;
    
  }

  logoutUser(){
    this.apiService.logoutUser();
  }

}
