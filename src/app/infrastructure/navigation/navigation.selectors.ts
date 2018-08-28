import { createSelector } from '@ngrx/store';

import { selectNavigationSideState, selectContextSideState } from '../core/core.state';
import { NavigationSideState, ContextSideState } from './navigation.models';

export const selectNavigationSide = createSelector(
  selectNavigationSideState,
  (state: NavigationSideState) => state
);

export const selectContextSide = createSelector(
  selectContextSideState,
  (state: ContextSideState) => state
);
