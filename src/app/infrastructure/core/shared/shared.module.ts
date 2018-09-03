// - Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// - 3rd Party
import { MaterialModule } from '@app/infrastructure/core/shared/modules/material.module';
import { DevExtremeModule } from '@app/infrastructure/core/shared/modules/devextreme.module';

// - Our Stuff
import { SharedPipesModule } from '@app/infrastructure/core/shared/pipes/pipe.module';
import { SharedComponentsModule } from '@app/infrastructure/core/shared/components/components.module';
import { SharedControlsModule } from '@app/infrastructure/core/shared/controls/controls.module';
import { SharedGuardsModule } from '@app/infrastructure/core/shared/guards/guards.module';
import { SharedResolversModule } from '@app/infrastructure/core/shared/resolvers/resolvers.module';
import { SharedDirectivesModule } from '@app/infrastructure/core/shared/directives/directives.module';
import { SharedValidationModule } from '@app/infrastructure/core/shared/validation/validation.module';
import { SharedErrorsModule } from '@app/infrastructure/core/shared/errors/errors.module';

@NgModule({
  imports: [
    // - Angular Stuff
    CommonModule,
    FormsModule,

    // - Our Shared Stuff
    SharedPipesModule.forRoot(),
    SharedComponentsModule,
    SharedControlsModule,
    SharedGuardsModule,
    SharedResolversModule,
    SharedDirectivesModule,
    SharedValidationModule,
    SharedErrorsModule,

    // - 3rd Party
    MaterialModule.forRoot(),
    DevExtremeModule
  ],
  declarations: [],
  exports: [
    // - Angular Stuff
    CommonModule,
    FormsModule,

    // - Our Shared Stuff
    SharedPipesModule,
    SharedComponentsModule,
    SharedControlsModule,
    SharedGuardsModule,
    SharedResolversModule,
    SharedDirectivesModule,
    SharedValidationModule,
    SharedErrorsModule,

    // - 3rd Party
    MaterialModule,
    DevExtremeModule
  ]
})
export class SharedModule {}
