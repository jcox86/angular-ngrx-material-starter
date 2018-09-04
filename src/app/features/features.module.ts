import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '@app/features/dashboard/dashboard.component';
import { CreateComponent } from '@app/features/create/create.component';
import { TranslateModule } from '@ngx-translate/core';
import { DevExtremeModule } from '@app/infrastructure/core/shared/modules/devextreme.module';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,

    DevExtremeModule
   ],
  declarations: [DashboardComponent, CreateComponent],
  exports: [
    TranslateModule,

    DashboardComponent,
    CreateComponent
  ]
})
export class FeaturesModule {}
