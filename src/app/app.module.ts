import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, provideFirebaseApp(() => initializeApp({"projectId":"app-comments-f399a","appId":"1:331952555035:web:e5b1662d6f8337253364be","storageBucket":"app-comments-f399a.appspot.com","apiKey":"AIzaSyAyJeubnNoxzrQsyOHEU5RyqAT1Q92q-lE","authDomain":"app-comments-f399a.firebaseapp.com","messagingSenderId":"331952555035","measurementId":"G-6LYTTFE528"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
