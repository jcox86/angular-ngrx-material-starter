import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, retry, catchError } from 'rxjs/operators';
import { LogService } from '@app/infrastructure/services/log.service';
import { MessageService } from '@app/infrastructure/services/message.service';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {

  constructor(public errorHandler: ErrorHandler,
              private log: LogService,
              private messages: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addAuth(request);

    return next.handle(request).pipe(
      // delay(500),
      // retry(1),
      catchError(
        (error) => {
          return of(this.handleHttpError(error));
        }
      ) as any
    );
  }

  private handleHttpError(err: HttpErrorResponse) {
    if (err.status === 404 && err.url.indexOf('/log') > -1) {
      this.log.error(err); // - Log error into user log
      this.messages.showToastError({header: 'Log Service Down', description: err.message}); // - Display toast of error
    } else {
      switch (err.status) {
        case 400: // TODO: How to handle 400 (Toast error)
          this.errorHandler.handleError(err);
          break;
        case 401: // TODO: How to handle 401 (Toast error and logout redirect?)
          this.errorHandler.handleError(err);
          break;
        case 403: // TODO: How to handle 403 (Toast warning)
          this.errorHandler.handleError(err);
          break;
        case 404: // TODO: How to handle 404 (Redirect to error page?)
          this.errorHandler.handleError(err);
          break;
        default: // TODO: How to handle everything else
          this.errorHandler.handleError(err);
          break;
      }
    }
    throw err;
  }

  private addAuth(request: HttpRequest<any>): HttpRequest<any> {
    const token = 'this.auth.token';
    if (token) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    return request;
  }
}
