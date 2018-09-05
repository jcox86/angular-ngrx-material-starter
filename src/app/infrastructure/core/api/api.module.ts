import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { ApiAppService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-app.service';
import { ApiValidationService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-validation.service';
import { ApiLogService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-log.service';
import { ApiNotificationService } from '@app/infrastructure/core/api/endpoints/infrastructure/api-notification.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        ApiService,
        // ******Provide each Feature Service here********
        ApiAppService,
        ApiLogService,
        ApiNotificationService,
        ApiValidationService
    ],
})
export class ApiModule { }
