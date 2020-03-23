import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';
import {Subscription} from 'rxjs';

// We will use PersonService class here, which is called Dependency Injection(DI)
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy { // Lifecycle hooks need implements something (TypeScipt feature)
  // Remember, Ionic 4 framework will use Angular's lifecycle hooks, no more ionic lifecycle hooks
  // Such as ngOnInit(), ngOnChanges(), ngOnDestroy()

  // Here you can accept the value from another page
  // It actually means create a prop to allow others to input something when they call you(this component)
  // @Input() personList: string[]; // property binding not needed anumore since we're doing services
  personList: string[];
  // Remember we don't have to inject ourselves, Angular will help us inject if it decides to.
  // Make sure that service is @Injectable()

  // private personService: PersonsService; // ** You actually don't have to assign service like this

  private personListSubs: Subscription;

  isFetching = false;

  constructor(private prsService: PersonsService) { // **You just have to do this, then TypeScript will do it fo you
    // If more than one component/class injects this service, they will get the absolute same object (singleton)
    // person-input.component.ts also using the PersonService

    // this.personList = prsService.persons; // Not recommended to do this when you start using Angular services
    // this.personService = prsService; // ** You actually don't have to assign service like this

  }

  ngOnInit(): void {
    // this.personList = this.prsService.persons; // Will be empty due to we start using HttpClient
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      // Will execute here when persons.service.ts publishes something
      this.personList = persons;
      // A bit like Redux, you need to replace the whole thing in order to trigger Angular to rerender the list
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  ngOnDestroy() {
    // Remember Subjects MUST be removed to prevent memory leaks
    // (EventEmitter approach don't have to do cleanup, Angular handles by its own)
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

}
