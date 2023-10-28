import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: '**', redirectTo: 'portal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
