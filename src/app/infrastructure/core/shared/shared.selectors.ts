import { createSelector } from '@ngrx/store';

import { selectContextItemState } from '@app/infrastructure/core/core.state';
import { ContextComponent } from '@app/infrastructure/classes/interfaces/context-component';

export const selectContextItem = createSelector(
  selectContextItemState,
  (state: ContextComponent) => state
);
