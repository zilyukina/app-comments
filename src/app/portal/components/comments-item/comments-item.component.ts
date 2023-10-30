import { Component, Input } from '@angular/core';
import { ICommment } from '../../model/comment';
import { DataService } from 'src/app/core/services/data.service';
import { IUser } from 'src/app/core/model/user';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.scss']
})
export class CommentsItemComponent {
  @Input() item!: ICommment;
  constructor(private _ds: DataService) {}

  getUserData(userUID: string, prop: keyof IUser): string {
    const user: IUser | undefined = this._ds.users.get(userUID);
    if (!user) {
      return  '';
    }
    return user[prop];
  }
}
