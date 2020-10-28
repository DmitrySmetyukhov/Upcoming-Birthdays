import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Person} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {PersonDataService} from '../../shared/services/person-data.service';
import {EditPersonDialogComponent} from '../../shared/edit-person-dialog/edit-person-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UtilityService} from '../../shared/services/utility.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'age', 'controls'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource();
  private subscriptions: Subscription[] = [];

  constructor(
    private personService: PersonDataService,
    public dialog: MatDialog,
    private utility: UtilityService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.personService.persons$.subscribe(list => {
      this.dataSource.data = list;
    }));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe(sort => {
      this.utility.updateQueryParams(sort);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(person: Person) {
    this.dialog.open(EditPersonDialogComponent, {
      data: {
        person
      }
    });
  }

  delete(id: string) {
    this.personService.deletePerson(id);
  }

}
