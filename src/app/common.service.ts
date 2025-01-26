import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private baseUrl = 'http://localhost:3000'; // Replace with your base API URL

  constructor(private http: HttpClient) {}

  // Get the auth token from localStorage (or wherever it's stored)
  getAuthToken(): string {
    return localStorage.getItem('authToken') || ''; // Example: retrieve token from localStorage
  }

  get<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  delete<T>(endpoint: string): Observable<T> {
    const token = this.getAuthToken(); // Get the token (if available)
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Add the token to the headers

    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { headers });
  }
}
