import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAuthToken(): string {
    return localStorage.getItem('authToken') || '';
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
    const token = this.getAuthToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { headers });
  }
}
