import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Role = Role;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isFarmer() {
    return this.authService.hasRole(Role.Farmer);
  }

  get isVendor() {
    return this.authService.hasRole(Role.Vendor);
  }

  get isDepartment(){
    return this.authService.hasRole(Role.Department)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
