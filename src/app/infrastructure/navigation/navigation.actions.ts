import { Action } from '@ngrx/store';

export enum NavigationSideActionTypes {
  OPEN = '[Navigation] Open',
  CLOSE = '[Navigation] Close'
}
export class ActionNavigationSideOpen implements Action {
  readonly type = NavigationSideActionTypes.OPEN;
}

export class ActionNavigationSideClose implements Action {
  readonly type = NavigationSideActionTypes.CLOSE;
}

export type NavigationSideActions = ActionNavigationSideOpen | ActionNavigationSideClose;


export enum ContextSideActionTypes {
  OPEN = '[Context] Open',
  CLOSE = '[Context] Close'
}
export class ActionContextSideOpen implements Action {
  readonly type = ContextSideActionTypes.OPEN;
}

export class ActionContextSideClose implements Action {
  readonly type = ContextSideActionTypes.CLOSE;
}

export type ContextSideActions = ActionContextSideOpen | ActionContextSideClose;
