import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})

export class SignInPageComponent {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _auth: AuthService) {
    this.form = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const {email, password} = this.form.value;
      this._auth.signIn(email, password).then(
        data => console.log(data)
      )
  }
}
