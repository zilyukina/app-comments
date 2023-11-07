import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { noWhitespaceValidator } from 'src/app/shared/helpers/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignInPageComponent {
  public form: FormGroup;

  constructor(private _fb: FormBuilder, private _auth: AuthService, private _router: Router) {
    this.form = this._fb.group({
      email: ['', [Validators.required, noWhitespaceValidator]],
      password: ['', [Validators.required, noWhitespaceValidator]],
    });
  }

  public onSubmit(): void {
    const {email, password} = this.form.value;
      this._auth.signIn(email, password)
        .then(
          _ => {
            this._router.navigate(['/portal']);
          }
        )
        .catch(err => console.log('Err', err))
  }
}
