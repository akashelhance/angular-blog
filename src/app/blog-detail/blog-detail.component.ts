import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: any;

  posts = [
    { id: 1, title: 'Angular Basics', content: 'Learn the basics of Angular, including components, modules, and directives.' },
    { id: 2, title: 'Advanced Angular', content: 'Dive deeper into Angular with topics like RxJS, services, and state management.' },
    { id: 3, title: 'Deploying Angular Apps', content: 'Learn how to deploy Angular applications to various platforms like Firebase and AWS.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.posts.find(p => p.id === id);
  }
}
