import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { settingsReducer } from './settings.reducer';
import { SettingsEffects } from './settings.effects';
import { SettingsContainerComponent } from './components/settings-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/infrastructure/core/shared/modules/material.module';

@NgModule({
  imports: [
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects]),
    TranslateModule,
    MaterialModule
  ],
  declarations: [SettingsContainerComponent]
})
export class SettingsModule {}
