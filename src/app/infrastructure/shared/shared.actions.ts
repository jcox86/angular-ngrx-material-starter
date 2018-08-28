import { Action } from '@ngrx/store';

export enum ContextItemActionTypes {
  SET = '[Context] Item'
}

export class ActionContextItemSet implements Action {
  readonly type = ContextItemActionTypes.SET;
}

export type ContextItemActions = ActionContextItemSet;
