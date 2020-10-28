import { Component, OnInit } from '@angular/core';
import {PersonDataService} from '../../shared/services/person-data.service';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrls: ['./upcoming-birthdays.component.scss']
})
export class UpcomingBirthdaysComponent implements OnInit {

  constructor(private personService: PersonDataService) { }

  ngOnInit(): void {
  }

}
