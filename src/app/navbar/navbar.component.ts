import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For routing

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false; // This flag controls whether the user is logged in or not

  constructor(private router: Router) {}

  // Simulating login/logout functionality for now
  login() {
    this.isLoggedIn = true;
    // Actual login logic should go here (e.g., calling auth service)
  }

  logout() {
    this.isLoggedIn = false;
    // Clear authentication token and handle logout process
    this.router.navigate(['/']); // Redirect to login page or home
  }
}
