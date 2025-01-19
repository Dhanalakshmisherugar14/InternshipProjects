import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

//import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppComponent, AppRoutingModule, ],
  
    providers: [],
})
export class AppModule { }
