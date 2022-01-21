import { LoadingService } from './../services/loading.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
const SNACKBAR_CONFIG = {
  duration: 3000,
};
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar, private ls: LoadingService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
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
        } else {
          this._snackBar.open('Something went wrong', 'close', SNACKBAR_CONFIG);
        }
        this.ls.removeLoading();
        return throwError(e);
      })
    );
  }
}
