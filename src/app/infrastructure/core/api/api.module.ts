import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { ApiAppService } from '@app/infrastructure/core/api/endpoints/api-app.service';
import { ApiValidationService } from '@app/infrastructure/core/api/endpoints/api-validation.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        ApiService,
        // ******Provide each Feature Service here********
        ApiAppService,
        ApiValidationService
    ],
})
export class ApiModule { }
