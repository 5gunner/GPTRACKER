import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { MapComponent } from './map/map.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    MapComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
