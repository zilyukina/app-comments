import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-article-page',
  templateUrl: './test-article-page.component.html',
  styleUrls: ['./test-article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestArticlePageComponent {

}
