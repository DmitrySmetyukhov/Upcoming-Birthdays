import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingBirthdaysComponent } from './upcoming-birthdays/upcoming-birthdays.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import {PersonsRoutingModule} from './persons-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UpcomingBirthdaysComponent, PersonsListComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule
  ]
})
export class PersonsModule { }
