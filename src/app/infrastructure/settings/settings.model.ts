import { AppState } from '@app/infrastructure/core';

export interface SettingsState {
  language: string;
  theme: string;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
