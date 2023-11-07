import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/services/data.service';

@Pipe({
  name: 'userData'
})
export class UserDataPipe implements PipeTransform {
  constructor(private _ds: DataService) {}
  transform(userUID: string, prop: keyof IUser): unknown {
    const user: IUser | undefined = this._ds.users.get(userUID);
    if (!user) {
      return  '';
    }
    return user[prop];
  }

}
