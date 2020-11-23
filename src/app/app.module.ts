import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ArtistBioListComponent } from './artist-bio-list/artist-bio-list.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistBioCardComponent } from './artist-bio-list/artist-bio-card/artist-bio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemFormComponent,
    ArtistBioListComponent,
    EditItemModalComponent,
    MainPageComponent,
    ArtistBioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
