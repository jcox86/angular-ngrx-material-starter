import { NavigationSideState, ContextSideState } from './navigation.models';
import { NavigationSideActions, NavigationSideActionTypes, ContextSideActions, ContextSideActionTypes } from './navigation.actions';

export const initialNavigationState: NavigationSideState = {
  isOpen: false
};

export const initialContextState: ContextSideState = {
  isOpen: false
};

export function navigationSideReducer(
  state: NavigationSideState = initialNavigationState,
  action: NavigationSideActions
): NavigationSideState {
  switch (action.type) {
    case NavigationSideActionTypes.OPEN:
      return { ...state, isOpen: true };

    case NavigationSideActionTypes.CLOSE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

export function contextSideReducer(
  state: ContextSideState = initialContextState,
  action: ContextSideActions
): ContextSideState {
  switch (action.type) {
    case ContextSideActionTypes.OPEN:
      return { ...state, isOpen: true };

    case ContextSideActionTypes.CLOSE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
}
