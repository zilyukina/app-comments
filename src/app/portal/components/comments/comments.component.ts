import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { IComment } from '../../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {
  comments!: Observable<IComment[]> ;
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


  toggleEmojiPicker(event: MouseEvent) {
    event.preventDefault();
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: EmojiEvent) {
    const {text} = this.form.value || '';
    this.form.patchValue({
      text: `${text + event.emoji.native}`
    })
  }

  public onSubmit(): void {
    const { text } = this.form.value;
    this.form.reset({
      text: ''
    });
    this._ds.addComment(text).then(
      _ => {}
    )
  }
}
