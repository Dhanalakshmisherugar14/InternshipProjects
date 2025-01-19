import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    title: string = "todo-contact";
}
