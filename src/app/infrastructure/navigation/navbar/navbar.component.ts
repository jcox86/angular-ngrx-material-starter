import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActionAuthLogin, ActionAuthLogout, selectAuth, AppState } from '@app/infrastructure/core';

import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { environment as env } from '@env/environment';
import { routes } from '../../../app-routing.module';
import { ActionNavigationSideOpen } from '@app/infrastructure/navigation/navigation.actions';
import { NotificationItem } from '@app/infrastructure/classes/interfaces/notification';
import { ApiService } from '@app/infrastructure/core/api/api.service';

@Component({
  selector: 'slo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  // - Fields -
  private unsubscribe$: Subject<void> = new Subject<void>();
  public isAuthenticated$: Observable<boolean>;
  public isProd = env.production;
  public envName = env.envName;
  public displayName: string;
  public recentNotifications$: Observable<NotificationItem[]>;
  public navigation: Array<{
    path: string,
    name: string,
    icon: string
  }> = [];

  // - Ctor -
  constructor(private store: Store<AppState>, private api: ApiService) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1 && route.data.show) {
        this.navigation.push({
          name: route.data.text,
          path: '/' + route.path,
          icon: route.data.icon
        });
      }
    }
  }

  // - OnInit -
  ngOnInit() {
    this.subscribeToIsAuthenticated();
    this.subscribeToRecentNotifications();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // - Functions -
  private subscribeToIsAuthenticated() {
    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated),
      takeUntil(this.unsubscribe$));
  }

  private subscribeToRecentNotifications() {
    this.recentNotifications$ = this.api.notification.getRecentNotifications('user').pipe(takeUntil(this.unsubscribe$));
  }

  openNavigationSide() {
    this.store.dispatch(new ActionNavigationSideOpen());
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  // openEforms() {
  //   window.open(`http://${environment.eFormsBase}/eformscontainer/#/eforms`, '_newtab');
  // }
}
