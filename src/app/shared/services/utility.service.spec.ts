import {TestBed} from '@angular/core/testing';
import {UtilityService} from './utility.service';
import {ActivatedRoute, Router} from '@angular/router';

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
});
