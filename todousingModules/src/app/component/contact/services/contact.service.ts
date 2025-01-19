import { Injectable } from '@angular/core';
import { Contact } from './../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly localStorageKey = 'contacts_with_keerthi';

  constructor() {}

 
  getAll(): Contact[] {
    const contactJson = localStorage.getItem(this.localStorageKey);
    return contactJson ? JSON.parse(contactJson) : [];
  }


  get(id: number): Contact | undefined {
    const contacts = this.getAll();
    return contacts.find((contact) => contact.id === id);
  }


create(contact: Contact): Contact {
    const contacts = this.getAll();
    contact.id = this.generateId();
    contacts.push(contact);
    this.saveToLocalStorage(contacts);
    return contact;
  }

 
  update(contact: Contact): Contact | undefined {
    const contacts = this.getAll();
    const index = contacts.findIndex((c) => c.id === contact.id);
    if (index !== -1) {
      contacts[index] = contact;
      this.saveToLocalStorage(contacts);
      return contact;
    }
    return undefined;
  }

 
  delete(id: number): void {
    const contacts = this.getAll();
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.saveToLocalStorage(updatedContacts);
  }


  private generateId(): number {
    const contacts = this.getAll();
    const ids = contacts.map((contact) => contact.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    return maxId + 1;
  }


  private saveToLocalStorage(contacts: Contact[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }
}
