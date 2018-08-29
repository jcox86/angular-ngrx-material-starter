import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SafeHtmlPipe],
  declarations: [SafeHtmlPipe],
  providers: []
})
export class SharedPipesModule {
  static forRoot() {
    return {
      ngModule: SharedPipesModule
    };
  }
}
