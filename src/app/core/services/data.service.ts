import { Injectable, OnDestroy } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { IUser, IUserCollection } from 'src/app/core/model/user';
import { Subscription } from 'rxjs';
import { getAuth } from "firebase/auth";
import { serverTimestamp, orderBy } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICommment } from 'src/app/portal/model/comment';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  currentUserUid: string | undefined;
  users: IUserCollection = new Map();
  readonly commentsCollectionRef = collection(this._fs, 'comments');
  readonly comments = this._afs.collection<ICommment>('comments', ref => ref.orderBy('createdAt', 'asc'));
  private _subscription$ = new Subscription();
  constructor(private _fs: Firestore, private _afs: AngularFirestore) {
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
    return this.comments;
  }

  whoAmI() {
    this.currentUserUid = getAuth().currentUser?.uid;
  }

  addComment(text: string) {
    return setDoc(doc(this.commentsCollectionRef), 
      {
        createdAt: serverTimestamp(),
        text: text,
        userUID: this.currentUserUid,
      }
    )
  }


}
