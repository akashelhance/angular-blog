import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  postId!: number; 
  postDetail: any; 

  constructor(private route: ActivatedRoute, private apiService: CommonService) {}

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
}
