import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestArticlePageComponent } from './pages/test-article-page/test-article-page.component';
import { PortalRoutingModule } from './portal.routing';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsItemComponent } from './components/comments-item/comments-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TestArticlePageComponent,
    CommentsComponent,
    CommentsItemComponent,
  ],
  imports: [
    PortalRoutingModule,
    SharedModule
  ],
})
export class PortalModule { }
