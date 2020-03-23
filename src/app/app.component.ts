import { Component } from '@angular/core';

// 1. Defines what is your HTML tag name(selector), for example:
// If selector: 'app-root, then you can call this page's HTML
// by writing <app-root></app-root> inside the HTML code. (see index.html)
// Like that you also can write app-root {...} inside your css file
// to style anything on your page only.

// 2. where is your html file (templateUrl),

// 3. And where is your css file (styleUrls)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // The root app first page's controller
  title = 'ng-refresher';
  // TypeScript can actually infer this by reading data in it. (No need to mention variable types)

  // One way to pass data from component to component is calling @Input()
  // persons: string[] = ['Max', 'Manuel', 'Anna'];


  // onPersonCreated(name: string) { // Not needed because using Angular service
  //   this.persons.push(name);
  // }
}
