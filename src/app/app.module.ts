// -- Angular --
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// -- Infrastructure --
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';

// -- App --
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // -- Angular --
    BrowserAnimationsModule,
    BrowserModule,

    // -- Infrastructure --
    InfrastructureModule,

    // -- App --
    AppRoutingModule // <-----Application Routing
  ],
  declarations: [AppComponent, routedComponents], // <-----The top-level routing Components defined by your routes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
