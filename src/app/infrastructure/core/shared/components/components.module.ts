import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '@app/infrastructure/core/shared/components/banner/banner.component';
import { SettingsModule } from '@app/infrastructure/core/shared/components/settings/settings.module';
import { SharedPipesModule } from '@app/infrastructure/core/shared/pipes/pipe.module';
import { NotificationsModule } from '@app/infrastructure/core/shared/components/notifications/notifications.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,

    SharedPipesModule,
    SettingsModule,
    NotificationsModule
  ],
  declarations: [BannerComponent],
  exports: [
    SettingsModule,
    BannerComponent,
    NotificationsModule
  ]
})
export class SharedComponentsModule {}
