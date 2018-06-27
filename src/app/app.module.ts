import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MediaComponent } from './media/media.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    JumbotronComponent,
    MediaComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
