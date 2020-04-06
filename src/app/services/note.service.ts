import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, BehaviorSubject } from 'rxjs';

import {environment} from 'src/environments/environment';
import {HttpHeaders , HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl="http://localhost:8080/notes/"
  constructor(private http: HttpService) { }
  private _notesList = new Subject<any>();
  private _subject = new Subject<any>();

  private _content = new BehaviorSubject<number>(0);
  public share = this._content.asObservable();
  public get autoRefesh() {
    return this._subject;
  }

  public postcreateNote(arr) {
    console.log(
      "fetching token: ",
      localStorage.getItem('token'),
      "note : ",arr
    );
    return this.http.post(this.baseUrl + 'Create',arr,this.http.httpOptions);
  }


  private noteApiUrl = environment.noteApiUrl;
  private createNoteUrl = environment.createNoteUrl;

  private httpOptions={
    headers: new HttpHeaders ({'content-type':'application/json'})
    };

    // public getAllNotes() {
  //   console.log(" all notes service reached");

  //   return this.http.get(this.baseUrl + 'registeruser', arr,this.http.httpOptions);

  //   );
  // }

   
}
