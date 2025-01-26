import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  currentuser = 'user'
  responseMsg: any;
  isLoggedin: boolean = false;
  loggedIn: boolean=false;
  posts: any;
  errorMessage: string='';
  constructor(private fb: FormBuilder,
   
    private route: ActivatedRoute,
    private http:HttpClient,

    
    private router: Router) {
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


      this.http.get<any[]>('http://localhost:3000/posts').pipe(
          map((data) => {
            console.log('Data from API:', data); // Log the API response
            return data;
          }),
          catchError((error) => {
            this.errorMessage = 'Error fetching data';
            console.error('Error:', error);
            return of([]); 
          })
        ).subscribe(
          (data) => {
            this.posts = data;
            console.log('Posts after subscription:', this.posts); 
          }
        );

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