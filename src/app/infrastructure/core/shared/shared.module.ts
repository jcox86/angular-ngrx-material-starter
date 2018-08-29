// - Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// - 3rd Party
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/infrastructure/core/shared/modules/material.module';
import { DevExtremeModule } from '@app/infrastructure/core/shared/modules/devextreme.module';

// - Our Stuff
import { SharedPipesModule } from '@app/infrastructure/core/shared/pipes/pipe.module';
import { SharedComponentsModule } from '@app/infrastructure/core/shared/components/components.module';
import { SharedControlsModule } from '@app/infrastructure/core/shared/controls/controls.module';
import { SharedGuardsModule } from '@app/infrastructure/core/shared/guards/guards.module';
import { SharedResolversModule } from '@app/infrastructure/core/shared/resolvers/resolvers.module';
import { SharedDirectivesModule } from '@app/infrastructure/core/shared/directives/directives.module';

@NgModule({
  imports: [
    // - Angular Stuff
    CommonModule,
    FormsModule,

    // - Our Stuff
    SharedPipesModule,
    SharedComponentsModule,
    SharedControlsModule,
    SharedGuardsModule,
    SharedResolversModule,
    SharedDirectivesModule,

    // - 3rd Party
    TranslateModule,
    MaterialModule,
    DevExtremeModule
  ],
  declarations: [],
  exports: [
    // - Angular Stuff
    CommonModule,
    FormsModule,

    // - Our Stuff
    SharedPipesModule,
    SharedComponentsModule,
    SharedControlsModule,
    SharedGuardsModule,
    SharedResolversModule,
    SharedDirectivesModule,

    // - 3rd Party
    TranslateModule,
    MaterialModule,
    DevExtremeModule
  ]
})
export class SharedModule {}
