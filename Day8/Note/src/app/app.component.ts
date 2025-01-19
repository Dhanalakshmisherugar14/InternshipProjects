import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotesComponent } from "./Component/notes/notes.component";

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo
  ,
  imports: [NotesComponent]
})
export class AppComponent {
  title = 'Note';
}
