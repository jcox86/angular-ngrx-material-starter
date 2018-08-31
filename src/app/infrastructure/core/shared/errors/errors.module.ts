import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsHandler } from '@app/infrastructure/core/shared/errors/errors-handler';
import { ServerErrorsInterceptor } from '@app/infrastructure/core/shared/errors/server-errors.interceptor';

@NgModule({
  imports: [ ],
  declarations: [ ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true,
    }
  ]
})
export class SharedErrorsModule {}
