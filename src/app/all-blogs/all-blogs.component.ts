import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  posts: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalPosts: number = 0;
  limit: number = 10; 
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }


  fetchPosts() {
    const params = new HttpParams()
      .set('page', this.currentPage.toString())
      .set('limit', this.limit.toString());

    this.http.get<any>('http://localhost:3000/posts', { params }).pipe(
      map((data) => {
        console.log('Data from API:', data); 
        this.totalPosts = data.total;
        this.totalPages = data.lastPage;
        return data.data;
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


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchPosts(); 
    }
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPosts(); 
    }
  }


  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchPosts(); 
    }
  }
}
