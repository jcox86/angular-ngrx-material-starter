import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/infrastructure/core';
import { ServicesModule } from '@app/infrastructure/services/services.module';

import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  imports: [
    RouterModule, // <--- Needed for navbar below
    TranslateModule, // <--- Needed for navbar below

    CoreModule, // <--- Must import Infrastructure modules here
    ServicesModule
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    TranslateModule, // <--- Needed for navbar below

    CoreModule, // <--- Must export same (Imported Modules) AND (Declared Components) as listed above so app.module.ts can import them
    ServicesModule,

    NavbarComponent,
    FooterComponent
  ]
})
export class InfrastructureModule {}
