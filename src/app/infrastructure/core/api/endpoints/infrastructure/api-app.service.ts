import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiEndpoint } from '../../api-endpoint';
import { User } from '@app/infrastructure/classes/models/user'; // - Import your class objects to be mapped

@Injectable()
export class ApiAppService extends ApiEndpoint {
  public config = { // - Setup config object at top
    route: '/auth', // - Set route for each 'endpoint' to talk to
    headers: {
      get: 'none', // - Set which REST calls get which headers by default (override in method)
      post: 'none'
    }
  };

  getCurrentUser(): Observable<User> { // - Always return Observable<T>
    return this.get(`${this.config.route}/current-user`).pipe(  // - Call REST type (get, post, etc.) and pass in route (optional) and headers (optional)
      map((adusers: User) => {  // - Map object from response
        return adusers as User; // - Return cast of object to the Observable
      })
    );
  }
}
