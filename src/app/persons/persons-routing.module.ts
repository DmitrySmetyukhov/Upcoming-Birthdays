import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UpcomingBirthdaysComponent} from './upcoming-birthdays/upcoming-birthdays.component';
import {PersonsListComponent} from './persons-list/persons-list.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'upcoming-birthdays',
    pathMatch: 'full'
  },
  {
    path: 'upcoming-birthdays',
    component: UpcomingBirthdaysComponent
  },
  {
    path: 'list',
    component: PersonsListComponent
  },
  {
    path: '**',
    redirectTo: 'upcoming-birthdays'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PersonsRoutingModule { }
