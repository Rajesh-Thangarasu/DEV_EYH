import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialloginService } from './service/sociallogin.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eyh';
  _isLoggedIn: boolean = false;
  constructor(
    private SocialloginService: SocialloginService
  ) {
    this._isLoggedIn = this.SocialloginService.getAuthStatus(); 
  }
  
  ngOnInit() {  
    this._isLoggedIn = this.SocialloginService.getAuthStatus(); 
  }  

}
