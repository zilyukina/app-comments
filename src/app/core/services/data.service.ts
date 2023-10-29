import { Injectable, OnDestroy } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IUser, IUserCollection } from 'src/app/core/model/user';
import { Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  users: IUserCollection = new Map();
  private _subscription$ = new Subscription();
  constructor(private _fs: Firestore) {
  }

  ngOnDestroy(): void {
    this._subscription$?.unsubscribe();
  }

  getUsers() {
    const commentsCollectionRef = collection(this._fs, 'users');
    this._subscription$.add(
      collectionData(commentsCollectionRef)
      .subscribe((users) => {
        console.log(users);
        users.map(u => {
          const user = u as IUser;
          this.users.set(user.userUID, user);
        })
      })
    )
  }
}
