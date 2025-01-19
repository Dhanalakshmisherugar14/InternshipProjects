import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-main',
  imports: [ CommonModule,RouterModule, RouterLink,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
    contacts: Contact[] = []; // List of all contacts
    contactToDelete: number | null = null; // ID of the contact to delete
  
    constructor(
      private contactService: ContactService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      // Fetch all contacts when the component initializes
      this.contacts = this.contactService.getAll();
    }
  
    // Select a contact for deletion
    selectContactToDelete(contactId: number): void {
      this.contactToDelete = contactId;
    }
  
    // Delete the selected contact
    deleteContact(): void {
      if (this.contactToDelete !== null) {
        this.contactService.delete(this.contactToDelete); // Delete from service
        this.contacts = this.contacts.filter(
          (contact) => contact.id !== this.contactToDelete
        ); // Update the local list
        this.contactToDelete = null; // Reset selected contact
      }
    }
  }


