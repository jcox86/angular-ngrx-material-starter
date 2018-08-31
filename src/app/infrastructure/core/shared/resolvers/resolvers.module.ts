import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterResolver } from '@app/infrastructure/core/shared/resolvers/router.resolver';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    RouterResolver
  ]
})
export class SharedResolversModule {}
