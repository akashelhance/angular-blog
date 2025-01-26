import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = JSON.parse(localStorage.getItem('auth_token') || '{}');

    if (authToken) {
      
      console.log('Auth Token:', authToken);

      // Clone the request and add the Authorization header
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      
      return next.handle(authReq); // Pass the modified request
    }

    return next.handle(req); // Pass the request as is if no token is found
  }
}
