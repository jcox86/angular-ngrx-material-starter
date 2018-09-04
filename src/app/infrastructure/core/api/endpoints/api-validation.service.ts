import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiEndpoint } from '../api-endpoint';
import { IValidationRules } from '@app/infrastructure/classes/interfaces/validation.models';

@Injectable()
export class ApiValidationService extends ApiEndpoint {
  public config = { // - Setup config object at top
    route: '/validation/rules', // - Set route for each 'endpoint' to talk to
    headers: {
      get: 'none', // - Set which REST calls get which headers by default (override in method)
      post: 'none'
    }
  };

  getValidationRules(): Observable<IValidationRules> { // - Always return Observable<T>
    return this.get(`${this.config.route}`).pipe(  // - Call REST type (get, post, etc.) and pass in route (optional) and headers (optional)
      map((rules: IValidationRules) => {  // - Map object from response
        return rules as IValidationRules; // - Return cast of object to the Observable
      })
    );
  }
}
