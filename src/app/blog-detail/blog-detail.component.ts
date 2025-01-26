import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  postId!: number; 
  postDetail: any; 

  constructor(
    private route: ActivatedRoute,
    private apiService: CommonService,
    private router: Router // Inject the router to navigate after deletion
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id']; 
      this.getPostById(this.postId); 
    });
  }

  getPostById(id: number): void {
    this.apiService.get(`posts/${id}`).subscribe(
      (response) => {
        this.postDetail = response;
        console.log('Post Details:', this.postDetail);
      },
      (error) => {
        console.error('Error fetching post details:', error);
      }
    );
  }

  deletePost(id: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      console.log(`Attempting to delete post with ID: ${id}`); // Log post ID
      this.apiService.delete<any>(`posts/${id}`).subscribe(
        () => {
          console.log('Post deleted successfully');
          this.router.navigate(['/']); // Redirect to the homepage or the post list
        },
        (error) => {
          console.error('Error deleting post:', error);
          alert('Failed to delete post. Please check the console for details.'); // Display error to the user
        }
      );
    }
  }
  
}
