import { Component, Input } from '@angular/core';
import { ICommment } from '../../model/comment';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.scss']
})
export class CommentsItemComponent {
  @Input() item!: ICommment;
}
