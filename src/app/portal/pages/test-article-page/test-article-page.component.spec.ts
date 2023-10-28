import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TestArticlePageComponent } from './test-article-page.component';

describe('TestArticlePageComponent', () => {
  let component: TestArticlePageComponent;
  let fixture: ComponentFixture<TestArticlePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestArticlePageComponent],
    });
    fixture = TestBed.createComponent(TestArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
