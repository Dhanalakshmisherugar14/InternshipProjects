import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'notes';

  getNotes(): Note[] {
    const notes = localStorage.getItem(this.storageKey);
    return notes ? JSON.parse(notes) : [];
  }

  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }
}
