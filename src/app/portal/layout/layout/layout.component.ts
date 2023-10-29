import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router, private _data: DataService) {}

  signOut() {
    this._auth.signOut().then(_ => {
      this._router.navigate(['/auth']);
    })
  }

  ngOnInit(): void {
    this._data.whoAmI();
  }
}
