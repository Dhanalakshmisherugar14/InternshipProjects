import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note'; // Update the path accordingly
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  alert = false;
  noteId: number | any;
  note: Note | any;
  constructor(
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.noteId = params['id'];
      console.log(this.noteId);
      if (this.noteId >= 0) {
        this.note = this.noteService.get(this.noteId);
        console.log(this.note);
      } else {
        console.log('SORRY , Some thing is wrong');
      }
    }); //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  update(): void {
    this.noteService.update(this.note);
    this.alert = true
    setTimeout(() => {
      this.goBack();
      this.alert = false;
    }, 3000);
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
