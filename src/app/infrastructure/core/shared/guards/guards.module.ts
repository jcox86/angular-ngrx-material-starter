import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/infrastructure/core/shared/guards/auth-guard.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class SharedGuardsModule {}
