import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { NgModel } from '@angular/forms';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path:'edit/:id',  component:EditComponent},
  {path:'create',   component:CreateComponent},
  

];

