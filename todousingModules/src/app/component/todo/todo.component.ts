import { Component, createComponent } from '@angular/core';
import {  RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  ,
  imports: [  CommonModule , RouterOutlet]
})
export class TodoComponent {
  title='todo-list';
}
