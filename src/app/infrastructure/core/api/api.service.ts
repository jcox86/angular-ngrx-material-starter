import { Injectable } from '@angular/core';
import { ApiAppService } from '@app/infrastructure/core/api/endpoints/api-app.service';
import { ApiValidationService } from '@app/infrastructure/core/api/endpoints/api-validation.service';

@Injectable()
export class ApiService {
  constructor(
    // ******Add Feature Specfic services here to expose endpoints*******
    public app: ApiAppService,
    public validation: ApiValidationService
  ) {}
}
