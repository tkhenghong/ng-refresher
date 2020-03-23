import {Component, Output, EventEmitter} from '@angular/core';
import {PersonsService} from './persons.service';

// Let's add other component(UI page) in the same folder (not recommended)
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personService: PersonsService) {
    // person.component.ts also using the PersonService
  }

  // To output the list of the persons, we need to use @Output() to the variable
  // Create a event emitter to always pass the value to the output
  // Someone can listen to this outside!
  // @Output() personCreate = new EventEmitter<string>();

  onCreatePerson() { // Bring the value to here
    console.log('Created a person: ' + this.enteredPersonName);
    // this.personCreate.emit(this.enteredPersonName); // You emit the event like this
    // Don't need to emit anymore due to we start to use Angular services

    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
    // 2 way binding. If you change something here,
    // the input value linked ngModel with enteredPersonName will be blank too.
  }
}
