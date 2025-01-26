import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
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
}
