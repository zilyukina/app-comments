import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments!: Observable<any> ;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _fs: Firestore, private _ds: DataService) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.comments = this._ds.getComments();
  }

  onSubmit(): void {
    const { text } = this.form.value;
    this._ds.addComment(text).then(
      _ => this.form.reset()
    )
  }
}
