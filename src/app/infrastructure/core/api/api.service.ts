import { Injectable } from '@angular/core';
import { ApiAppService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-app.service';
import { ApiValidationService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-validation.service';
import { ApiNotificationService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-notification.service';
import { ApiLogService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-log.service';

@Injectable()
export class ApiService {
  constructor(
    // ******Add Feature Specfic services here to expose endpoints*******
    public app: ApiAppService,
    public validation: ApiValidationService,
    public log: ApiLogService,
    public notification: ApiNotificationService
  ) {}
}
