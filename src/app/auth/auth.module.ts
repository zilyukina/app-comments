import { NgModule } from '@angular/core';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignInPageComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
