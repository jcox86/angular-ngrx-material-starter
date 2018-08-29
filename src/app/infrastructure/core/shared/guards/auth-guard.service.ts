import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { selectAuth } from '@app/infrastructure/core/auth/auth.selectors';
import { AppState } from '@app/infrastructure/core/core.state';

@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated = false;

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectAuth))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }
  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
