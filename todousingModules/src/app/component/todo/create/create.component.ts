import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../../models/note';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  alert = false;
  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    date: '', // Initially empty
   
  };

  constructor(private NoteService: NoteService, private router: Router) {}

  // Create new note
  createNew(): void {
    this.NoteService.create(this.newNote); // Call the service method to create note

    this.alert = true; // Show alert
    setTimeout(() => {
      this.alert = false; // Hide alert after 3 seconds
      this.goBack(); // Navigate back after alert is hidden
    }, 3000);

    // Reset newNote object
    this.newNote = {
      id: 0,
      title: '',
      description: '',
      date: '', // Reset date picker
      
    };
  }

  // Navigate back to the main page
  goBack(): void {
    this.router.navigate(['/']);
  }
}
