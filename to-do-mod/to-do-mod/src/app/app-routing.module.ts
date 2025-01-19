import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path: 'todo', component: TodoComponent
  },
  { path: 'contact', component: ContactComponent

  },
  {
    path: 'contact', loadChildren: ()=> import('./component/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'todo', loadChildren: ()=> import(`./component/todo/todo.component`).then(m=> m.TodoComponent)
  }
  ,
  //{
   // path: '', redirectTo: '/todo', pathMatch: 'full' // Default route redirects to 'todo'
 //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


// {
  //  path: 'contact',
   // 
   // loadChildren: () => import(`src/app/Module/contact/add-contact/add-contact.module`).then(m => m.AddContactModule)
  //}, 
 // {
  //  path : 'todo',
    
  //  loadChildren: () => import(`src/app/Module/todo/add-todo/add-todo.module`).then(m => m.TodoListModule)
 // }import { Contact } from './Module/contact/contact';

