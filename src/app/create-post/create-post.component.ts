import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string = '';
  content: string = '';

  onSubmit() {
    console.log('Post Created:', { title: this.title, content: this.content });
    alert('Post created successfully!');
    this.title = '';
    this.content = ''; // Clear the form
  }
}
