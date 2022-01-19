import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
const SNACKBAR_CONFIG = {
  duration: 3000,
};
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404) {
          const message =
            e.url?.includes(environment.MULTIPLY_URL) ||
            e.url?.includes(environment.ADD_URL)
              ? 'MISSING DATA'
              : e.url?.includes(environment.NUMBERS_URL)
              ? 'SERVER ERROR'
              : 'Something went wrong';
          this._snackBar.open(message, 'close', SNACKBAR_CONFIG);
        }
        return throwError(e);
      })
    );
  }
}
