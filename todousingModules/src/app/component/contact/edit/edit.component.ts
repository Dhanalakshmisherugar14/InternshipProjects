import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    number: '',
    date: '',
  };
  alert = {
    show: false,
    message: '',
  }
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = +this.route.snapshot.paramMap.get('id')!;
    const contact = this.contactService.get(contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.alert.show = true;
      this.alert.message = 'Contact not found';
      setTimeout(() => {
        this.alert.show = false;
        this.goBack();
      }, 2000);
      this.router.navigate(['/contacts']);
    }
  }

  update(): void {
    if (this.contact) {
      this.contactService.update(this.contact);
      this.alert.show = true;
      setTimeout(() => {
        this.alert.show = false;
        this.goBack();
      }, 2000);
    }
  }

  goBack(): void {
    this.router.navigate(['/contact']);
  }
}
