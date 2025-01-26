import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  postId!: number; // The ID from the route
  postDetail: any; // The data received from the API

  constructor(private route: ActivatedRoute, private apiService: CommonService) {}

  ngOnInit(): void {
    // Get the 'id' from the route
    this.route.params.subscribe((params) => {
      this.postId = +params['id']; // Convert string to number
      this.getPostById(this.postId); // Call the API with the ID
    });
  }

  // Call the API to get the post details
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
}
