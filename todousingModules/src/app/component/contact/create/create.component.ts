import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-contact',
  imports: [CommonModule, FormsModule],



templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  alert: { show: boolean } = { show: false };

    newContact: Contact = {
      id: 0,
      name: '',
      email: '',
      date: '',
      number: '',
    };
  constructor(private ContactService: ContactService, private router: Router) {}

createNew(): void {
  this.newContact.date = new Date().toDateString();
  this.ContactService.create(this.newContact);

  this.alert.show = true; 

  setTimeout(() => {
    this.alert.show = false;
    this.goBack(); // Navigate back
  }, 3000); // Adjust the timeout duration (e.g., 3000ms for 3 seconds)



  this.newContact = {
    id: 0,
    name: '',
    email: '',
    date: '',
    number: '',

  };
}

goBack(): void {
  this.router.navigate(['/contact']);
}

}
