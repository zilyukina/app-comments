import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _fauth: AngularFireAuth) { }

  signIn(email: string, password: string): Promise<any> {
    return this._fauth.signInWithEmailAndPassword(email, password)
  }

  signOut(): Promise<any>  {
    return this._fauth.signOut();
  }

  grege() {
    return this._fauth.currentUser
  }
}
