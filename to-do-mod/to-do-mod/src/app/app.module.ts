import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    TodoComponent,
   ContactComponent,
   RouterModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {}
