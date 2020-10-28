import {Person} from './interfaces';
import * as moment from 'moment';

export const mockPersonsList: Person[] = [
  {
    id: '1',
    firstName: 'test1',
    lastName: 'test1 last name',
    dateOfBirth: moment().subtract(10, 'years').add(15, 'days').toISOString()
  },
  {
    id: '2',
    firstName: 'test2',
    lastName: 'test2 last name',
    dateOfBirth: moment().subtract(10, 'years').add(5, 'days').toISOString()
  },
  {
    id: '3',
    firstName: 'test3',
    lastName: 'test3 last name',
    dateOfBirth: moment().subtract(10, 'years').add(20, 'days').toISOString()
  }
];
