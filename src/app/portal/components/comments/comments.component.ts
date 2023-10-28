import { Component } from '@angular/core';
import { ICommment } from '../../model/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments!: Observable<any> ;// ICommment[] = [
  //   {
  //     author: {
  //       login: 'tolstokojev',
  //       name: 'Толстокожев Вячеслав Филиппович'
  //     },
  //     text: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу'
  //   },
  //   {
  //     author: {
  //       login: 'tolstokojev',
  //       name: 'Толстокожев Вячеслав Филиппович'
  //     },
  //     text: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу'
  //   }
  // ];
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _fs: Firestore) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.form.reset();
    const comments = collection(this._fs, 'comments');
    this.comments= collectionData(comments, {idField: 'id'});
    console.log(this.comments);
    this.comments.subscribe((data: any)=> {
      console.log(data);
    });
  }
}
