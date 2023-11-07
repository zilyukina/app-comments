import { NgModule } from '@angular/core';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AuthRoutingModule } from './auth.routing';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignInPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AngularFireAuthModule
  ],
})
export class AuthModule { }
