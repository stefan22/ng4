import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MediaComponent } from './media/media.component';
import { AppdataService } from './appdata.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    JumbotronComponent,
    MediaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
