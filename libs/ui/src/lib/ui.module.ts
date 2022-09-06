import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout/layout.component';

import { UiCodeComponent } from './atoms/code/code.component';
import { UiTagsExamplesComponent } from './examples/tags/tags.component';
import { UiColorsExamplesComponent } from './examples/colors/colors.component';
import { UiExamplesIconsComponent } from './examples/icons/icons.component';
import { UiInternHeaderComponent } from './intern/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiLayoutComponent,
    UiTagsExamplesComponent,
    UiColorsExamplesComponent,
    UiCodeComponent,
    UiExamplesIconsComponent,
    UiInternHeaderComponent,
  ],
  exports: [UiLayoutComponent, UiCodeComponent],
})
export class UiModule {}
