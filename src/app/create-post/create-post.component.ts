import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string = ''; 
  content: string = ''; 

  items: any[] = [];

  constructor(private apiService: CommonService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getItems();
  }


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

  // Handle form submission to create a new post
  onSubmit(): void {
    const newItem = { title: this.title, content: this.content };
    this.apiService.post('posts', newItem).subscribe(
      (response) => {
        console.log('Item added:', response);
        this.title = '';
        this.content = '';
        this.getItems(); 

   
        this.snackBar.open('Post created successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error adding item:', error);
      
        this.snackBar.open('Error creating post. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  // Handle updating a post
  updateItem(id: string): void {
    const updatedItem = { name: 'Updated Name', description: 'Updated Description' };
    this.apiService.put(`posts/${id}`, updatedItem).subscribe(
      (response) => {
        console.log('Item updated:', response);
        this.getItems(); 


        this.snackBar.open('Post updated successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error updating item:', error);

        this.snackBar.open('Error updating post. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }


  deleteItem(id: string): void {
    this.apiService.delete(`posts/${id}`).subscribe(
      (response) => {
        console.log('Item deleted:', response);
        this.getItems(); 

   
        this.snackBar.open('Post deleted successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error deleting item:', error);
        // Show error toast
        this.snackBar.open('Error deleting post. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
