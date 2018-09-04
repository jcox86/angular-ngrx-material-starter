import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActionAuthLogin, ActionAuthLogout, selectAuth, AppState } from '@app/infrastructure/core';

import { Store, select } from '@ngrx/store';

import { routes } from '../../../app-routing.module';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { ActionNavigationSideOpen } from '@app/infrastructure/navigation/navigation.actions';
import { environment as env } from '@env/environment';

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
  public navigation: Array<{
    path: string,
    name: string,
    icon: string
  }> = [];

  // - Ctor -
  constructor(private store: Store<AppState>) {
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
