import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiService } from '@app/infrastructure/core/api/api.service';
import { NotificationItem } from '@app/infrastructure/classes/interfaces/notification';

@Component({
  selector: 'slo-notifications',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.scss']
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  notifications$: Observable<NotificationItem[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscribeToNotifications();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToNotifications() {
    this.notifications$ = this.api.notification.getAllNotifications('user').pipe(takeUntil(this.unsubscribe$));
  }
}
