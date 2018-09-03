import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '@app/features/dashboard/dashboard.component';
import { AboutComponent } from '@app/features/about/about.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule
   ],
  declarations: [DashboardComponent, AboutComponent],
  exports: [
    TranslateModule,

    DashboardComponent,
    AboutComponent
  ]
})
export class FeaturesModule {}
