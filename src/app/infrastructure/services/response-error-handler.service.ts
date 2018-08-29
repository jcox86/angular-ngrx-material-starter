import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { IApiError } from '../classes/interfaces/api-error';
import { MessageService } from './message.service';

@Injectable()
export class ResponseErrorHandlerService {
  errorMessage: IApiError = { header: '', description: '' };
  messageStyle = {
    type: 'error'
  };

  constructor(private message: MessageService) {}

  public handleError(error: Response | any): Observable<any> {
    this.messageStyle.type = 'error';
    if (error.status === 401 && error.status !== 0) {
      this.errorMessage.description = this.setUnauthorized();
      this.errorMessage.header = 'Not Authenticated';
    } else if (error.status === 403 && error.status !== 0) {
      this.errorMessage.description = this.setForbidden();
      this.errorMessage.header = 'Not Authorized';
    } else if (!error.status) {
      this.errorMessage.description =
        'Server Error. Please contact your supervisor if you need assistance.';
      this.errorMessage.header = 'Invalid Request';
    } else if (error.error.errors !== '' && error.status !== 0) {
      this.errorMessage.description = this.unpackErrors(error.error);
      this.errorMessage.header = 'Error';
    }
    this.message.showToastError(this.errorMessage);
    return throwError(this.errorMessage);
  }

  private unpackErrors(response): string {
    let message = '';
    typeof response === 'string'
      ? (message = JSON.parse(response).errors[0].message)
      : (message = response.errors[0].message);

    return message;
  }

  private setUnauthorized(): string {
    return 'Your session has expired. If you wish to continue working, please log in again.';
  }

  private setForbidden(): string {
    return 'You do not have permission to view the selected page.';
  }
}
