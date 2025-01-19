import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from "./create/create.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']  // Corrected styleUrls
  ,
  imports: [CreateComponent]
})
export class TodoComponent {
  title='todo-list';
}
