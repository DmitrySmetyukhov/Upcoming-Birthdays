import {TestBed} from '@angular/core/testing';
import {UtilityService} from './utility.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

const fakeActivatedRoute = {
  snapshot: {
    queryParams: {
      returnUrl: '/'
    }
  }
};

describe('UtilityService', () => {
  const router = jasmine.createSpyObj('Router', ['navigate']);
  let service: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useFactory: () => fakeActivatedRoute}
      ],
    });
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate age', () => {
    const age = service.calculateAge(moment().subtract(1, 'years').toISOString());
    expect(age).toBe(1, 'Wrong age calculation');
  });

  it('should calculate days until next birthday', () => {
    const birthDate = moment().subtract(45, 'years').add(3, 'days').toISOString();
    const result = service.daysUntil(birthDate);
    expect(result).toBe(3, 'Wrong remaining days calculation');
  });
});
