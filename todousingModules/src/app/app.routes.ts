import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'todo', component: TodoComponent }, // Todo route should be '/todo'
  { path: 'contact', component: ContactComponent }, // Contact route
  
];
