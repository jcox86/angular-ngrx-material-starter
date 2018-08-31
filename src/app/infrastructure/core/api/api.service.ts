import { Injectable } from '@angular/core';
import { ApiAppService } from '@app/infrastructure/core/api/endpoints/api-app.service';

@Injectable()
export class ApiService {
  constructor(
    // ******Add Feature Specfic services here to expose endpoints*******
    public app: ApiAppService
  ) {}
}
