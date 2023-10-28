import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestArticlePageComponent } from './pages/test-article-page/test-article-page.component';
import { PortalRoutingModule } from './portal.routing';

@NgModule({
  declarations: [
    TestArticlePageComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
  ],
})
export class PortalModule { }
