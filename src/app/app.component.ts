import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { AuthService } from './auth.service';
// import { Router } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Routing Module - Route Guards Demo';
 
  constructor (
    private authService:AuthService, 
    private router:Router
               ) {
  }
 
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
    alert("successfuly logout");
  }
 
}
