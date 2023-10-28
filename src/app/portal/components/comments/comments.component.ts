import { Component } from '@angular/core';
import { ICommment } from '../../model/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments: ICommment[] = [
    {
      author: {
        login: 'tolstokojev',
        name: 'Толстокожев Вячеслав Филиппович'
      },
      text: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу'
    },
    {
      author: {
        login: 'tolstokojev',
        name: 'Толстокожев Вячеслав Филиппович'
      },
      text: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу'
    }
  ];
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.form.reset();
  }
}
