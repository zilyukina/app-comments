import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/core/services/data.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments!: Observable<any> ;
  form: FormGroup;
  showEmojiPicker = false;

  constructor(private _fb: FormBuilder, private _fs: Firestore, private _ds: DataService) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.comments = this._ds.getComments().valueChanges();
  }


  toggleEmojiPicker(event: any) {
    event.preventDefault();
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const {text} = this.form.value || '';
    this.form.patchValue({
      text: `${text + event.emoji.native}`
    })
  }

  onSubmit(): void {
    const { text } = this.form.value;
    this.form.reset();
    this._ds.addComment(text).then(
      _ => {}
    )
  }
}
