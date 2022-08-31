import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout/layout.component';
import { TagsComponent } from './examples/tags/tags.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiLayoutComponent, TagsComponent],
  exports: [
    UiLayoutComponent
  ]
})
export class UiModule {}
