import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Import the routes
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    TodoComponent,
    ContactComponent,
    HomeComponent
    
  ],
  providers: [],})
export class AppModule {}
