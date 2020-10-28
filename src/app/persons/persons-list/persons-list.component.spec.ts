import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PersonsListComponent} from './persons-list.component';
import {AppModule} from '../../app.module';
import {DebugElement} from '@angular/core';

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
});
