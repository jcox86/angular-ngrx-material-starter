import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/infrastructure/core/shared/modules/material.module';
import { DevExtremeModule } from '@app/infrastructure/core/shared/modules/devextreme.module';
import { NotificationsContainerComponent } from '@app/infrastructure/core/shared/components/notifications/components/notifications-container.component';

@NgModule({
  imports: [
    TranslateModule,
    MaterialModule,
    DevExtremeModule
  ],
  declarations: [NotificationsContainerComponent]
})
export class NotificationsModule {}
