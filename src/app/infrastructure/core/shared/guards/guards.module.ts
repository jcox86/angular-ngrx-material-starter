import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/infrastructure/core/shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '@app/infrastructure/core/shared/guards/can-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    AuthGuardService,
    CanDeactivateGuard
  ]
})
export class SharedGuardsModule {}
