import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // For routing

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // This flag controls whether the user is logged in or not
  token: any;
  hide = true;
  currentuser = 'user'
  responseMsg: any;
  isLoggedin: boolean = false;
  loggedIn: boolean=false;
  posts: any;
  errorMessage: string='';
  constructor(private router: Router,

        private route: ActivatedRoute,
        private http:HttpClient,
    
        
  ) {
  this.token = localStorage.getItem('auth_token');

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('auth_token', JSON.stringify(token)); 
        this.loggedIn = true;
        this.router.navigate(['/home']);
        // Save JWT for future requests
      }
     
    })  ;
  }

  
  

  loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google'; // Redirect to Google login
  }

  

  
  logout() {
    //  this.authService.logout();
  
    window.location.href = 'http://localhost:3000/auth/signout'; // Redirect to Google login
    this.loggedIn=false
    localStorage.removeItem('auth_token')

  
    
  
    }
  
}
