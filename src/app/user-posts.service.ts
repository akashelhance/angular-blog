import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  deletePost(id: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/user-posts';

  constructor(private http: HttpClient) {}

 
  getAuthToken(): string {
    return JSON.parse(localStorage.getItem('auth_token') || '{}');
  }


  getUserPosts(): Observable<any> {
    const token = this.getAuthToken();  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
