import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TestArticlePageComponent } from './pages/test-article-page/test-article-page.component';

const routes: Routes = [
  {
    path: 'test-article',
    pathMatch: 'full',
    component: TestArticlePageComponent,
  },
  {
    path: '',
    redirectTo: 'test-article',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'test-article', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
