import {Injectable} from '@angular/core';
import {Person} from '../interfaces';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  public daysUntil(date: string) {
    const age = this.calculateAge(date);
    const nextBirthday = moment(date).add(age + 1, 'years').startOf('day');
    return nextBirthday.diff(moment().startOf('day'), 'days');
  }

  public calculateAge(date: string) {
    return moment().startOf('day').diff(moment(date).startOf('day'), 'years');
  }

  public sortByUpComingDates(list: Person[]) {
    return list.sort((a, b) => {
      return this.daysUntil(a.dateOfBirth) - this.daysUntil(b.dateOfBirth);
    });
  }

  public updateQueryParams(params) {
    const settings = {
      queryParams: {
        ...params,
      },
      relativeTo: this.activeRoute
    };

    this.router.navigate([], settings);
  }
}
