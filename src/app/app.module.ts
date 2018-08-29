// -- Angular --
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// -- Infrastructure --
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';

// -- App --
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@app/infrastructure/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    // -- Angular --
    BrowserAnimationsModule,
    BrowserModule,

    // -- Infrastructure --
    InfrastructureModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // -- App --
    AppRoutingModule // <-----Application Routing
  ],
  declarations: [AppComponent, routedComponents], // <-----The top-level routing Components defined by your routes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
