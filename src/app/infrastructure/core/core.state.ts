import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

// - Meta Reducers -
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';

// - Models -
import { AuthState } from './auth/auth.models';
import { NavigationSideState, ContextSideState } from '@app/infrastructure/navigation/navigation.models';
import { ContextComponent } from '@app/infrastructure/classes/interfaces/context-component';

// - Reducers -
import { authReducer } from './auth/auth.reducer';
import { navigationSideReducer, contextSideReducer } from '@app/infrastructure/navigation/navigation.reducer';
import { contextItemReducer } from '@app/infrastructure/shared/shared.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  navigationSide: navigationSideReducer,
  contextSide: contextSideReducer,
  contextItem: contextItemReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectNavigationSideState = createFeatureSelector<AppState, NavigationSideState>(
  'navigationSide'
);

export const selectContextSideState = createFeatureSelector<AppState, ContextSideState>(
  'contextSide'
);

export const selectContextItemState = createFeatureSelector<AppState, ContextComponent>(
  'contextItem'
);

export interface AppState {
  auth: AuthState;
  navigationSide: NavigationSideState;
  contextSide: ContextSideState;
  contextItem: ContextComponent;
}
