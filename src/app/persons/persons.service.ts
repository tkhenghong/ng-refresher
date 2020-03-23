import {Injectable} from '@angular/core';
import {Subject} from 'rxjs'; // Most important library that even Angular is using in it's core libraries
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'; // In app.module.ts you import HttpClientModule, butwhen you use it you use HttpClient
// For service we add @Injectable, because we can "inject" service to other components
// @Injectable() // Old way of make service class injectable
@Injectable({providedIn: 'root'}) // The left is an example we inject the service (recommended by Angular 6 and above, new stuff)
// you can change this providedIn to other modules only, but that is advanced technique, pls go refer docs
export class PersonsService {
  // You MUST use Subjects to send the latest whole array here t
  // replace the list in persons.component.ts to trigger Angular to change the list
  personsChanged = new Subject<string[]>();
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  constructor(private http: HttpClient) {
  }

  fetchPersons() {
    // Call anything
    // In case of CORS error, you need to open Google Chrome web inspector
    // go to network tab and clear the network cache and cookie
    // you can pipe() before subscribe to the listener given by this.http.get(), like a middleman
    // Then, in pipe() you can bring map() (from rxjs/operator) to
    this.http.get<any>('https://swapi.co/api/people').pipe(map(resData => {
      // The above map() is rsjx map() method
      console.log('before transformation resData: ', resData);
      // This object has a property called results which contains all info of the Star Wars characters
      return resData.results.map(character => character.name); // This results.map() is normal JavaScript map() method, used for arrays
    })).subscribe((transformedData) => {
      console.log('after transformation transformedData: ', transformedData);
      this.personsChanged.next(transformedData);
    });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons); // Emit event (like publish)
    console.log('persons array: ', this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    // Remember, filter loop return true will take that element and return false will drop that element to the results
    console.log(this.persons);
    // Remember, doing this will not remove the person physically (remove <li> tag) in the HTML, only data will change
    // To fix this, use Subjects
    this.personsChanged.next(this.persons); // Emit event (like publish)
  }
}
