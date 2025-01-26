import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  posts = [
    { id: 1, title: 'Angular Basics', content: 'Learn the basics of Angular, including components, modules, and directives.' },
    { id: 2, title: 'Advanced Angular', content: 'Dive deeper into Angular with topics like RxJS, services, and state management.' },
    { id: 3, title: 'Deploying Angular Apps', content: 'Learn how to deploy Angular applications to various platforms like Firebase and AWS.' }
  ];
}
