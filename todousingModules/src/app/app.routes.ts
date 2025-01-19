import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/todo/create/create.component';
import { EditComponent } from './component/todo/edit/edit.component';
import { TodoHome} from './component/todo/home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'todo', component: TodoComponent ,
    children: [
      {path: '',component: TodoHome},
        { path: 'create' ,component: CreateComponent },
        { path: 'edit/:id', component:EditComponent  }
      ]
   },
  { path: 'contact', component: ContactComponent },
];
