import { initialState, settingsReducer } from './settings.reducer';

import {
  ActionSettingsChangeAnimationsElements,
  ActionSettingsChangeAnimationsPage,
  ActionSettingsChangeAnimationsPageDisabled,
  ActionSettingsChangeTheme
} from './settings.actions';

describe('SettingsReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const state = settingsReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update theme', () => {
    const action = new ActionSettingsChangeTheme({ theme: 'dark' });
    const state = settingsReducer(undefined, action);
    expect(state.theme).toEqual('dark');
  });

  it('should update pageAnimations', () => {
    const action = new ActionSettingsChangeAnimationsPage({
      pageAnimations: false
    });
    const state = settingsReducer(undefined, action);
    expect(state.pageAnimations).toEqual(false);
  });

  it('should update pageAnimationsDisabled and pageAnimations', () => {
    const action = new ActionSettingsChangeAnimationsPageDisabled({
      pageAnimationsDisabled: true
    });
    const state = settingsReducer(undefined, action);
    expect(state.pageAnimationsDisabled).toEqual(true);
    expect(state.pageAnimations).toEqual(false);
  });

  it('should update elementsAnimations', () => {
    const action = new ActionSettingsChangeAnimationsElements({
      elementsAnimations: false
    });
    const state = settingsReducer(undefined, action);
    expect(state.elementsAnimations).toEqual(false);
  });

});
