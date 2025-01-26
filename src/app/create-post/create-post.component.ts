import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string = ''; // Ensure type is string
  content: string = ''; // Ensure type is string

  items: any[] = [];

  constructor(private apiService: CommonService) {}

  ngOnInit(): void {
    this.getItems();
  }

  // Get items
  getItems(): void {
    this.apiService.get('posts').subscribe(
      (response: any) => {
        this.items = response;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  // Add a new item
  onSubmit(): void {
    const newItem =  { title: this.title, content: this.content };
    this.apiService.post('posts', newItem).subscribe(
      (response) => {
        console.log('Item added:', response);
        this.title='';
        this.content=''

        this.getItems(); // Refresh the list
      },
      (error) => {
        console.error('Error adding item:', error);
      }
    );
  }

  // Update an item
  updateItem(id: string): void {
    const updatedItem = { name: 'Updated Name', description: 'Updated Description' };
    this.apiService.put(`posts/${id}`, updatedItem).subscribe(
      (response) => {
        console.log('Item updated:', response);
        this.getItems(); // Refresh the list
      },
      (error) => {
        console.error('Error updating item:', error);
      }
    );
  }

  // Delete an item
  deleteItem(id: string): void {
    this.apiService.delete(`posts/${id}`).subscribe(
      (response) => {
        console.log('Item deleted:', response);
        this.getItems(); // Refresh the list
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

  
}
