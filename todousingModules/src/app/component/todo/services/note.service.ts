import { Injectable } from '@angular/core';
//import { LocalStorageService } from '../../services/local-storage.service';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private LocalStoragekey='notes_with_keerthi'

  constructor() { }


  getAll():Note[]{
    const noteJson=localStorage.getItem(this.LocalStoragekey);
    return noteJson ? JSON.parse(noteJson):[];
  }
  get(id:number): Note | any {
    const notesJson = localStorage.getItem(this.LocalStoragekey);
    const notes: Note[]= notesJson ? JSON.parse(notesJson):[];
    console.log(id);
    console.log(notes);
    console.log(notes.find((n)=>n.id==id));
    return notes.find((n)=>n.id==id)
  }
   create(note:Note):Note{
    let notes:Note[]=JSON.parse(localStorage.getItem(this.LocalStoragekey) || '[]')
    note.id = this.genetateId();
    notes.push(note);
    localStorage.setItem(this.LocalStoragekey, JSON.stringify(notes));
    return note;
   }
  update(note:Note):Note | undefined {
    let notes:Note[]=JSON.parse(localStorage.getItem(this.LocalStoragekey)||'[]')
    const index = notes.findIndex(n=>n.id===note.id);
    if(index !== -1) {
      console.log("index");
      notes[index]=note;
      localStorage.setItem(this.LocalStoragekey,JSON.stringify(notes));
      return note;

    }
    return undefined;
  }
  delete(id:number): void {
    let notes:Note[]=JSON.parse(localStorage.getItem(this.LocalStoragekey)|| '[]');
    const index = notes.findIndex(n=>n.id===id);
    if(index !== -1){
      notes.splice(index,1);
      localStorage.setItem(this.LocalStoragekey,JSON.stringify(notes));

    }
  }
  
private genetateId():number{
  const notes:Note[]=JSON.parse(localStorage.getItem(this.LocalStoragekey)|| '[]');
  const ids = notes.map(note=>note.id);
  const maxId= Math.max(...ids);
  return maxId >= 0 ? maxId+1:0;
}

}
