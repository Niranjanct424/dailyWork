import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  createNoteForm: FormGroup;
  card: boolean = false;
  open : boolean;

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _noteService: NoteService
  ) { }

  ngOnInit() {
    this.createNoteForm = this._formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  cardSwap() {
    console.log(this.card);
    return this.card === true ? (this.card = false) : (this.card = true);
  }

  onOpen()
  {
    this.open=true;
  }


  
  createNote() {
    if (this.createNoteForm.invalid) {
      console.log("Opps! no notes are added...");
      return;
    } else {
      this._noteService.postcreateNote(this.createNoteForm.value).subscribe(
        response => {
          console.log("response : ", response);
          this._snackBar.open(" Note creted sucessfully...", "ok", {
            duration: 4000
          });
          // reset data after creating note to default
          this.createNoteForm.reset();
        },
        errors => {
          console.log("errors : ", errors);
          if (errors.error.responseCode === 401) {
            this._snackBar.open(
              errors.error.message + " please login again",
              "Opps!",
              {
                duration: 4000
              }
            );
            localStorage.clear();
            this._router.navigate(['/login']);
          } else if (errors.error.responseCode === 400) {
            this._snackBar.open(errors.error.message, "Opps!", {
              duration: 4000
            });
          } else {
            this._snackBar.open("Opps! Error creating notes", "Ok", {
              duration: 4000
            });
          }
          console.log("to reset: ", this.createNoteForm.controls.title);
          this.createNoteForm.reset();
        }
      );
    }
  }
}
