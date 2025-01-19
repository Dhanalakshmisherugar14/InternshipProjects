import { Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/todo/create/create.component';
import { EditComponent } from './component/todo/edit/edit.component';
import { TodoHome } from './component/todo/home/home.component';
import { TodoComponent } from './component/todo/todo.component';
import { MainComponent } from './component/contact/main/main.component';
import { CreateComponent as addcontact } from './component/contact/create/create.component';
import { EditComponent as editcontact } from './component/contact/edit/edit.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: '', component: TodoHome },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'add', component: addcontact },
      { path: 'edit/:id', component: editcontact },
    ],
  },
];
