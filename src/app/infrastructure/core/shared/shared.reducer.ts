import { ContextComponent } from '@app/infrastructure/classes/interfaces/context-component';
import { ContextItemActions, ContextItemActionTypes } from '@app/infrastructure/core/shared/shared.actions';

export const initialState: ContextComponent = {
  data: null
};

export function contextItemReducer(
  state: ContextComponent = initialState,
  action: ContextItemActions
): ContextComponent {
  switch (action.type) {
    case ContextItemActionTypes.SET:
      return { ...state, data: state.data };

    default:
      return state;
  }
}
