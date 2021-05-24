import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '@core/services';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const bearer = `Bearer ${this.tokenService.getToken()}`;

    const newRequest = request.clone({
      setHeaders: {
        Authorization: bearer,
        'x-api-key': '0a3c506270ff421f521aeebe556dc1', /* It's for an example and temporary, needed for GraphQL call */
      },
    });

    return next.handle(newRequest)
      .pipe(
        catchError((err) => throwError(err)),
      );
  }
}
