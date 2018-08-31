import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleService } from '@app/infrastructure/services/title.service';
import { ResponseErrorHandlerService } from '@app/infrastructure/services/response-error-handler.service';
import { MessageService } from '@app/infrastructure/services/message.service';
import { LogService } from '@app/infrastructure/services/log.service';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [],
  providers: [
    TitleService,
    // ResponseErrorHandlerService,
    MessageService,
    LogService,
    ToastrService
  ]
})
export class ServicesModule {}
