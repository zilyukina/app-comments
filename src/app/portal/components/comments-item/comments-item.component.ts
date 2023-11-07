import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComment } from '../../model/comment';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsItemComponent {
  @Input() item!: IComment;
}
