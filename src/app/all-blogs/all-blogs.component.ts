import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  posts: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.isLoading = true;

    this.http.get<any>(`http://localhost:3000/posts?page=${this.currentPage}&limit=10`)
      .pipe(
        map((data) => {
          this.posts = data.data;
          this.totalPages = data.lastPage;
        }),
        catchError((error) => {
          this.errorMessage = 'Error fetching data';
          return of({ data: [], lastPage: 1 });
        })
      )
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPosts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPosts();
    }
  }

  navigateToBlogDetail(postId: number) {
    this.router.navigate(['/post-detail', postId]);
  }
}

