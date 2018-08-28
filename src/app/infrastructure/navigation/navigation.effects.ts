import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/infrastructure/core/local-storage/local-storage.service';

import { ActionNavigationSideOpen,
         ActionNavigationSideClose,
         NavigationSideActionTypes
  } from './navigation.actions';

export const NAVIGATIONSIDE_KEY = 'NAVIGATIONSIDE';

@Injectable()
export class NavigationEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  open() {
    return this.actions$.pipe(
      ofType<ActionNavigationSideOpen>(NavigationSideActionTypes.OPEN),
      tap(() => this.localStorageService.setItem(NAVIGATIONSIDE_KEY, { isOpen: true }))
    );
  }

  @Effect({ dispatch: false })
  close() {
    return this.actions$.pipe(
      ofType<ActionNavigationSideClose>(NavigationSideActionTypes.CLOSE),
      tap(() => this.localStorageService.setItem(NAVIGATIONSIDE_KEY, { isOpen: false }))
    );
  }
}



