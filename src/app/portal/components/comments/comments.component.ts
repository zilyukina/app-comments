import { Component, OnInit } from '@angular/core';
import { ICommment } from '../../model/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionReference, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments!: Observable<any> ;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _fs: Firestore) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const commentsCollectionRef = collection(this._fs, 'comments');
    this.comments = collectionData(commentsCollectionRef);
  }

  onSubmit(): void {
    this.form.reset();
  }
}
