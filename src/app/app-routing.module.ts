import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { usersResolver } from './core/resolvers/users.resolver';
import { redirectUnauthorizedTo, canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LayoutComponent } from './portal/layout/layout/layout.component';

const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['/auth/sign-in']);
const redirectToPortal = () => redirectLoggedInTo(['/portal']);

const routes: Routes = [
  {
    path: 'portal',
    component: LayoutComponent,
    loadChildren: () => import('./portal/portal.module').then((m) => m.PortalModule),
    resolve: {
      _: usersResolver,
    },
    ...canActivate(redirectUnauthorizedToAuth),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectToPortal)
  },
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: '**', redirectTo: 'portal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
