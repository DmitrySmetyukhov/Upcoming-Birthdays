import {Component, OnInit} from '@angular/core';
import {PersonDataService} from '../../shared/services/person-data.service';
import {Observable} from 'rxjs';
import {Person} from '../../shared/interfaces';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrls: ['./upcoming-birthdays.component.scss']
})
export class UpcomingBirthdaysComponent implements OnInit {
  public upComings$: Observable<Person[]>;

  constructor(private personService: PersonDataService) {
  }

  ngOnInit(): void {
    this.upComings$ = this.personService.persons$.pipe(map(list => list.slice(0, 5)));
  }

}
