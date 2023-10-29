import { Injectable, OnDestroy } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { IUser, IUserCollection } from 'src/app/core/model/user';
import { Subscription } from 'rxjs';
import { getAuth } from "firebase/auth";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  currentUserUid: string | undefined;
  users: IUserCollection = new Map();
  readonly commentsCollectionRef = collection(this._fs, 'comments');
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
        users.map(u => {
          const user = u as IUser;
          this.users.set(user.userUID, user);
        })
      })
    )
  }

  getComments() {
    return collectionData(this.commentsCollectionRef);
  }

  whoAmI() {
    this.currentUserUid = getAuth().currentUser?.uid;
  }

  addComment(text: string) {
    return setDoc(doc(this.commentsCollectionRef), 
      {
        text: text,
        userUID: this.currentUserUid,
      }
    )
  }


}
