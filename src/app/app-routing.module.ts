import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonsComponent} from './persons/persons.component';
import {PersonInputComponent} from './persons/person-input.component';

const routes: Routes = [ // a bunch of routes linked to your UI pages
  // format: {path: 'link string': component: 'object of that page'}
  // path: '' becomes localhost:8080/
  // path: 'input' becomes localhost:8080/input
  {path : '', component: PersonsComponent},
  {path : 'input', component: PersonInputComponent},
];

// @Component is for UI pages, @NgModule is for module so you can build
// some sort of libraries and get imported by other modules for example app.modules.ts
@NgModule({
  imports: [RouterModule.forRoot(routes)], // import our 'unconfigured' RouterModule with our defined routes as argument
  exports: [RouterModule] // we export with our configured RouterModule
  // Call RouterModule module (from Angular Routes) and .forRoot(...) means initialize routes with ... inside
})
export class AppRoutingModule {

}
