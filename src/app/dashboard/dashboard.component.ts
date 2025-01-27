import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../user-posts.service'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userPosts: any[] = [];
  errorMessage: string = '';


  constructor(private userPostsService: UserPostsService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(): void {
    const token = this.userPostsService.getAuthToken();
    if (token) {
      this.userPostsService.getUserPosts().subscribe(
        (data:any) => {
          this.userPosts = data;
        },
        (error:any) => {
          this.errorMessage = 'Error fetching user posts: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'No token found, please log in.';
    }
  }

  navigateToBlogDetail(postId: number) {
    this.router.navigate(['/post-detail', postId]);
  }
}
