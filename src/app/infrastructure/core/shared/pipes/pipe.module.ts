import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from '@app/infrastructure/core/shared/pipes/safe-html.pipe';
import { TruncatePipe } from '@app/infrastructure/core/shared/pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlPipe,
    TruncatePipe
  ],
  declarations: [
    SafeHtmlPipe,
    TruncatePipe
  ],
  providers: []
})
export class SharedPipesModule {
  static forRoot() {
    return {
      ngModule: SharedPipesModule
    };
  }
}
