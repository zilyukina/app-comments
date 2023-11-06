import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _fauth: AngularFireAuth) { }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this._fauth.signInWithEmailAndPassword(email, password)
  }

  signOut(): Promise<void>  {
    return this._fauth.signOut();
  }
}
