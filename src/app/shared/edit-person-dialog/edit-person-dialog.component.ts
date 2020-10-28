import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonDataService} from '../services/person-data.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-person-dialog',
  templateUrl: './edit-person-dialog.component.html',
  styleUrls: ['./edit-person-dialog.component.scss']
})
export class EditPersonDialogComponent implements OnInit {
  public form: FormGroup;
  public pending = false;
  public editAction = false;

  constructor(
    private fb: FormBuilder,
    private personService: PersonDataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.buildForm();

    if (this.data) {
      this.editAction = true;
      this.form.patchValue(this.data.person);
    }
  }

  async save() {
    this.pending = true;
    try {
      await this.personService.addPerson(this.form.value);
      this.dialog.closeAll();
    } catch (err) {
      this.showError();
    } finally {
      this.pending = false;
    }
  }

  public close() {
    this.dialog.closeAll();
  }

  private buildForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required]]
    });
  }

  private showError() {
    this.snackBar.open('Saving failed! :(', 'End now', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

}
