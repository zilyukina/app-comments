import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router, private _data: DataService) {}

  public signOut(): void {
    this._auth.signOut().then(_ => {
      this._router.navigate(['/auth']);
    })
  }

  public ngOnInit(): void {
    this._data.whoAmI();
  }
}
