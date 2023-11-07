import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Observable, Subscription, map, take, timeout } from 'rxjs';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { IComment } from '../../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit, AfterViewInit, OnDestroy {
  public comments$!: Observable<IComment[]> ;
  public form: FormGroup;
  public showEmojiPicker = false;
  private subscription$ = new Subscription();
  @ViewChild('commentsContainer', { read: ElementRef })  public commentsContainer!: ElementRef<any>;
  @ViewChildren('li') elements!: QueryList<any>;
  @ViewChild('emojiBox', { read: ElementRef })  public emojiBox!: ElementRef<any>;
  @ViewChild('emojiButton', { read: ElementRef })  public emojiButton!: ElementRef<any>;

  constructor(private _fb: FormBuilder,private _ds: DataService) {
    this.form = this._fb.group({
      text: ['', Validators.required],
    });
  }

  public trackByFn(_: number, item: IComment): string {
    return item.id
  } 

  public ngAfterViewInit() {
    this.subscription$.add(
    this.elements.changes.subscribe(_ => {
      this.commentsContainer.nativeElement.scrollTop = this.commentsContainer.nativeElement.scrollHeight;
    }))
  }

  public ngOnDestroy() {
    this.subscription$.unsubscribe();
  }


  public ngOnInit(): void {
    this.comments$ = this._ds.getComments().valueChanges({ idField: 'id' });
  }

  public clickEmojiPicker(event: MouseEvent) {
    event.preventDefault();
    this._toggleEmojiPicker(!this.showEmojiPicker);
  }

  private _toggleEmojiPicker(position: boolean) {
    this.showEmojiPicker = position;
  }

  public addEmoji(event: EmojiEvent) {
    const {text} = this.form.value || '';
    this.form.patchValue({
      text: `${text + event.emoji.native}`
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.emojiBox?.nativeElement?.contains(event.target) && !this.emojiButton?.nativeElement?.contains(event.target)) {
      this._toggleEmojiPicker(false)
    }
  }

  public onSubmit(): void {
    const { text } = this.form.value;
    this.form.reset({
      text: ''
    });
    this._ds.addComment(text).then(
      _ => {}
    )
  }
}
