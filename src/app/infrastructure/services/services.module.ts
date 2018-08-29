import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleService } from '@app/infrastructure/services/title.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [],
  providers: [
    TitleService
  ]
})
export class ServicesModule {}
