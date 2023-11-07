import { Injectable, OnDestroy } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { IUser, IUserCollection } from 'src/app/core/model/user';
import { Observable, Subscription } from 'rxjs';
import { getAuth } from "firebase/auth";
import { serverTimestamp, orderBy } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IComment } from 'src/app/portal/model/comment';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  currentUserUid: string | undefined;
  users: IUserCollection = new Map();
  readonly commentsCollectionRef = collection(this._fs, 'comments');
  readonly comments$ = this._afs.collection<IComment>('comments', ref => ref.orderBy('createdAt', 'asc'));
  private _subscription$ = new Subscription();
  constructor(private _fs: Firestore, private _afs: AngularFirestore) {
  }

  public ngOnDestroy(): void {
    this._subscription$?.unsubscribe();
  }

  public getUsers() {
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

  public getComments() {
    return this.comments$;
  }

  public whoAmI() {
    this.currentUserUid = getAuth().currentUser?.uid;
  }

  public addComment(text: string) {
    return setDoc(doc(this.commentsCollectionRef), 
      {
        createdAt: serverTimestamp(),
        text: text,
        userUID: this.currentUserUid,
      }
    )
  }
}
