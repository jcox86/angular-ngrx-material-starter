import { Injectable } from '@angular/core';

import { ApiEndpoint } from '../../api-endpoint';
import { ILog } from '@app/infrastructure/classes/interfaces/log';

@Injectable()
export class ApiLogService extends ApiEndpoint {
  public config = { // - Setup config object at top
    route: '/log', // - Set route for each 'endpoint' to talk to
    headers: {
      get: 'none', // - Set which REST calls get which headers by default (override in method)
      post: 'none'
    }
  };

  logHistory(logs: ILog[]) {
    return this.post(logs, `${this.config.route}/log`);
  }
}
