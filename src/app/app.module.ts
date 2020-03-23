import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PersonsComponent} from './persons/persons.component';
import {PersonInputComponent} from './persons/person-input.component';
import {FormsModule} from '@angular/forms'; // This will be auto imported by IntelliJ when [(ngModel)] is called
import {AppRoutingModule} from './app-routing.module';
// import {PersonsService} from './persons/persons.service';
// This is the interesting one here, it setups your UI controller, (declarations)
// what other module you're going to bring into this UI and (imports)
// if this module have different UI to start, you can set it using bootstrap parameter

import { HttpClientModule} from '@angular/common/http';

// Interesting stuff: import above this comment is actually Typscript feature, but imports below this comment is Angular feature

@NgModule({ // The decorator means anything which a @..., it is basically just a function behind the scene
  declarations: [
    AppComponent, // calls the component file which is your page's UI's controller
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [ // bring other modules into this module
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    // Core set of Angular functionalities
  ],
  // providers: [PersonsService], // declare your custom services here (2nd method used by KS)
  providers: [],
  bootstrap: [AppComponent] // root app component (You must have first page in your app)
})
export class AppModule {
}

// That is the reason why you can call this file
// You can leave blank in the class and let other classes call you
