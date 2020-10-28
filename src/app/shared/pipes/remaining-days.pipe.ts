import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from '../services/utility.service';

@Pipe({
  name: 'remainingDays',
  pure: true
})
export class RemainingDaysPipe implements PipeTransform {

  constructor(private utility: UtilityService) {
  }

  transform(dateOfBirth: string): string {
    return this.utility.daysUntil(dateOfBirth).toString();
  }
}
