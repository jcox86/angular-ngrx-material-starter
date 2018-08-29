import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '@app/infrastructure/core/shared/components/banner/banner.component';
import { SettingsModule } from '@app/infrastructure/core/shared/components/settings/settings.module';
import { SharedPipesModule } from '@app/infrastructure/core/shared/pipes/pipe.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,

    SharedPipesModule,
    SettingsModule
  ],
  declarations: [BannerComponent],
  exports: [
    SettingsModule,
    BannerComponent
  ]
})
export class SharedComponentsModule {}
