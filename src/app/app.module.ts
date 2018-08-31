// -- Angular --
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// -- Features --
import { FeaturesModule } from '@app/features/features.module';

// -- Infrastructure --
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';

// -- 3rd party --
import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

// -- App --
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@app/infrastructure/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    // -- Angular --
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // -- Features --
    FeaturesModule,

    // -- Infrastructure --
    InfrastructureModule,

    // -- 3rd party Configs--
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgProgressModule.forRoot({
      spinner: false,
      color: '#2cbe4e',
      thick: true
    }),
    NgProgressHttpModule,
    NgProgressRouterModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      // serverLogLevel: NgxLoggerLevel.ERROR
    }),
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
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
