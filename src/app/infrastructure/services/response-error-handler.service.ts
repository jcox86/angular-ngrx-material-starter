import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { IApiError } from '../classes/interfaces/api-error';
import { LogService } from '@app/infrastructure/services/log.service';

@Injectable()
export class ResponseErrorHandlerService {
  errorMessage: IApiError = { header: '', description: '' };
  messageStyle = {
    type: 'error'
  };

  constructor(private log: LogService) {}

  public handleError(error: Response | any) {
    switch (error.status) {
      case 400:
        this.errorMessage.description = error.message;
        this.errorMessage.header = 'Invalid Request';
        break;
      case 401:
        this.errorMessage.description = this.setUnauthorized();
        this.errorMessage.header = 'Not Authenticated';
        break;
      case 403:
        this.errorMessage.description = this.setForbidden();
        this.errorMessage.header = 'Not Authorized';
        break;
      default:
        this.errorMessage.description = error.message;
        this.errorMessage.header = 'Server Error';
        break;
    }
    // return this.log.error(this.errorMessage);
  }

  private unpackErrors(response): string {
    let message = '';
    // typeof response === 'string'
    //   ? (message = JSON.parse(response).errors[0].message)
    //   : (message = response.errors[0].message);
    message = response;

    return message;
  }

  private setUnauthorized(): string {
    return 'Your session has expired. If you wish to continue working, please log in again.';
  }

  private setForbidden(): string {
    return 'You do not have permission to view the selected page.';
  }
}
