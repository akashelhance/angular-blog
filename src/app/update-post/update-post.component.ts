import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

interface Post {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  postId!: number;
  title!: string;
  content!: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id']; // Get post ID from route params
      this.getPostById(this.postId); // Fetch the post data
    });
  }

  // Fetch post details by ID
  getPostById(id: number): void {
    this.apiService.get<Post>(`posts/${id}`).subscribe(
      (response) => {
        this.title = response.title;
        this.content = response.content;
      },
      (error) => {
        console.error('Error fetching post details:', error);
      }
    );
  }

  // Method to update post
  onSubmit(): void {
    const updatedPost: Post = {
      title: this.title,
      content: this.content,
      id: this.postId
    };

    this.apiService.put<Post>(`posts/${this.postId}`, updatedPost).subscribe(
      (response) => {
        console.log('Post updated successfully', response);
        this.router.navigate(['/']); // Redirect after successful update
      },
      (error) => {
        console.error('Error updating post:', error);
      }
    );
  }
}
