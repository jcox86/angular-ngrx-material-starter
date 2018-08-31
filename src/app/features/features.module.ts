import { NgModule } from '@angular/core';

import { DashboardComponent } from '@app/features/dashboard/dashboard.component';
import { AboutComponent } from '@app/features/about/about.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/infrastructure/core/shared/modules/material.module';

@NgModule({
  imports: [
    TranslateModule,
    MaterialModule
   ],
  declarations: [DashboardComponent, AboutComponent],
  exports: [
    TranslateModule,

    DashboardComponent,
    AboutComponent
  ]
})
export class FeaturesModule {}
