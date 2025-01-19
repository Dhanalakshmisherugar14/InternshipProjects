import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-edit',
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent  {
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    number: '',
    date:'',
  };
  alert: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the contact ID from the route parameters
    const contactId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the contact details using the service
    const contact = this.contactService.get(contactId);
    if (contact) {
      this.contact = contact;
    } else {
      // Handle the case where the contact is not found
      console.error('Contact not found');
      this.router.navigate(['/contacts']);
    }
  }

  // Update contact method
  update(): void {
    if (this.contact) {
      this.contactService.update(this.contact);
      this.alert = true;

      // Display success message and redirect after a short delay
      setTimeout(() => {
        this.alert = false;
        this.router.navigate(['/contacts']);  // Redirect back to contact list
      }, 2000);
    }
  }

  // Navigate back to contact list
  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}

