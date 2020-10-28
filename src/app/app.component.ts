import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditPersonDialogComponent} from './shared/edit-person-dialog/edit-person-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(EditPersonDialogComponent);
  }
}
