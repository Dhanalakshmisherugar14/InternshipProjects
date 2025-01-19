import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { NotesComponent } from './notes/notes.component';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  //declarations: [AppComponent, NotesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LocalStorageService],
  //bootstrap: [AppComponent],
})
export class AppModule {}
