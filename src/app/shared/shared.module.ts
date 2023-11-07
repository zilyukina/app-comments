import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FireTimestampPipe } from './pipes/fire-timestamp.pipe';

@NgModule({
  declarations: [
    FireTimestampPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconSpriteModule,
    PickerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconSpriteModule,
    PickerModule,
    FireTimestampPipe
  ],
})
export class SharedModule { }
