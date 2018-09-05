import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { ApiEndpoint } from '../../api-endpoint';
import { NotificationItem } from '@app/infrastructure/classes/interfaces/notification';

@Injectable()
export class ApiNotificationService extends ApiEndpoint {
  protected config = { // - Setup config object at top
    route: '/notifications', // - Set route for each 'endpoint' to talk to
    headers: {
      get: 'none', // - Set which REST calls get which headers by default (override in method)
      post: 'none'
    }
  };

  getRecentNotifications(user) {
    return this.post(user, `${this.config.route}/recent`).pipe(
      map((recentNotifications: NotificationItem[]) => {  // - Map object from response
        return recentNotifications as NotificationItem[]; // - Return cast of object to the Observable
      })
    );
  }

  getAllNotifications(user) {
    return this.post(user, `${this.config.route}`).pipe(
      map((notifications: NotificationItem[]) => {
        return notifications as NotificationItem[];
      })
    );
  }
}
