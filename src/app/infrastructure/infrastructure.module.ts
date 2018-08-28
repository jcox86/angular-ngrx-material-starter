import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@app/infrastructure/core';
import { SharedModule } from '@app/infrastructure/shared';
import { SettingsModule } from '@app/infrastructure/settings';

import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  imports: [
    RouterModule, // <--- Needed for navbar declaration below

    CoreModule, // <--- Must import Infrastructure modules here
    SharedModule,
    SettingsModule,
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    CoreModule, // <--- Must export same (Imported Modules) AND (Declared Components) as listed above so app.module.ts can import them
    SharedModule,
    SettingsModule,

    NavbarComponent,
    FooterComponent
  ]
})
export class InfrastructureModule {}
