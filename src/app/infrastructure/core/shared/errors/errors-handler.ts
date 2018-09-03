import { ErrorHandler, Injectable} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LogService } from '@app/infrastructure/services/log.service';
import { MessageService } from '@app/infrastructure/services/message.service';
import { ApiService } from '@app/infrastructure/core/api/api.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private logService: LogService,
              private messages: MessageService,
              private api: ApiService) { }

  handleError(error: Error | HttpErrorResponse) {
     this.logService.error(error); // - Log error into user log
     this.messages.showToastError({header: 'Unexpected Error', description: error.message}); // - Display toast of error
     this.api.app.logHistory(this.logService.logHistory); // - Send user log history to api
  }
}
