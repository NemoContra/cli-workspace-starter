import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Important: Don't send out sensitive
    //            security header to everyone!
    if (req.url.startsWith('http://www.angular.at')) {
      const headers = req.headers.set('Authorization', 'Basic Just-for-Demonstration');
      // We will add a meaningful header later during the auth exercise!
      req = req.clone({headers});
    }

    return next
      .handle(req)
      .pipe(
        catchError(error => this.handleError(error))
      );

  }

  private handleError(event: HttpErrorResponse) {
    if (event.status === 401 || event.status === 403) {
      this.router.navigate(['/home', {needsLogin: true}]);
    }
    return throwError(event);
  }
}
