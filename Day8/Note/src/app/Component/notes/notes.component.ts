import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note = {
    id: 0,
    title: '',
    content: '',
    createdAt: new Date(),
    get createdAtString() {
      return this.createdAt.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    },
    set createdAtString(value: string) {
      this.createdAt = new Date(value); // Parse from YYYY-MM-DD
    },
  };
  isEditMode = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.localStorageService.getNotes();
  }

  saveNote(): void {
    if (this.isEditMode) {
      const index = this.notes.findIndex((n) => n.id === this.selectedNote.id);
      if (index !== -1) {
        this.notes[index] = { ...this.selectedNote };
      }
    } else {
      const newNote: Note = {
        ...this.selectedNote,
        id: Date.now(),
        createdAt: new Date(),
      };
      this.notes.push(newNote);
    }
    this.localStorageService.saveNotes(this.notes);
    this.resetForm();
  }

  editNote(note: Note): void {
    this.selectedNote = { ...note };
    this.isEditMode = true;
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.localStorageService.saveNotes(this.notes);
  }

  resetForm(): void {
    this.selectedNote = { 
      id: 0, 
      title: '', 
      content: '', 
      createdAt: new Date(),
      get createdAtString() {
        return this.createdAt.toISOString().split('T')[0];
      },
      set createdAtString(value: string) {
        this.createdAt = new Date(value);
      }
    };
    this.isEditMode = false;
  }
}
