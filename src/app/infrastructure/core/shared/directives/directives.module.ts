import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContextSideDirective } from '@app/infrastructure/core/shared/directives/context-side.directive';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [ContextSideDirective],
  exports: [
    ContextSideDirective
  ]
})
export class SharedDirectivesModule {}
