import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'todo-home',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class TodoHome {
  notes: Note[] = [];
  noteToDelete: number | null = null;

  constructor(
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all notes when the component initializes
    this.notes = this.noteService.getAll();
  }

  // Select a note for deletion
  selectNoteToDelete(noteId: number): void {
    this.noteToDelete = noteId;
  }

  // Delete the selected note
  deleteNote(): void {
    if (this.noteToDelete !== null) {
      this.noteService.delete(this.noteToDelete);
      this.notes = this.notes.filter((note) => note.id !== this.noteToDelete);
      this.noteToDelete = null; // Reset selected note
    }
  }

  // Set background color based on the note's color property
  getBgColor(color: string | null): string {
    return color ? color : 'aqua';
  }
}
