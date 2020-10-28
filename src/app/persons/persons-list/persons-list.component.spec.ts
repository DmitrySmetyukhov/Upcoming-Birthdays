import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PersonsListComponent} from './persons-list.component';
import {AppModule} from '../../app.module';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('PersonsListComponent', () => {
  let component: PersonsListComponent;
  let fixture: ComponentFixture<PersonsListComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PersonsListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should sanitize query params', () => {
    let queryParams = {
      active: 'firstName',
      direction: 'asc'
    };
    let result = component.sanitizeQueryParams(queryParams);
    expect(result).toEqual({
      id: 'firstName',
      start: 'asc'
    }, 'Wrong truthy params sanitizing');

    queryParams = {
      active: 'test',
      direction: 'asc'
    };

    result = component.sanitizeQueryParams(queryParams);
    expect(result).toEqual(null, 'Wrong error params sanitizing');
  });

  it('Should display table', () => {
    const table = el.queryAll(By.css('.mat-table'));
    expect(table).toBeTruthy();
  });
});
