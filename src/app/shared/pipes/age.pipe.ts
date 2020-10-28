import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from '../services/utility.service';

@Pipe({
  name: 'age',
  pure: true
})
export class AgePipe implements PipeTransform {

  constructor(private utility: UtilityService) {
  }

  transform(value: string): string {
    return (this.utility.calculateAge(value) + 1).toString();
  }
}
