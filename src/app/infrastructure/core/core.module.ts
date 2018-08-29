import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '@env/environment';

import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthEffects } from './auth/auth.effects';
import { AuthGuardService } from '@app/infrastructure/core/shared/guards/auth-guard.service';
import { AnimationsService } from './animations/animations.service';
import { reducers, metaReducers } from './core.state';
import { NavigationEffects } from '../navigation/navigation.effects';
import { SharedModule } from '@app/infrastructure/core/shared/shared.module';

@NgModule({
  imports: [
    // - Angular -
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, NavigationEffects]),

    // - Our stuff -
    SharedModule
  ],
  declarations: [],
  providers: [
    LocalStorageService,
    AuthGuardService,
    AnimationsService
  ],
  exports: [SharedModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}
