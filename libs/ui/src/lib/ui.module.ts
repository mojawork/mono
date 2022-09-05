import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout/layout.component';

import { UiCodeComponent } from './atoms/code/code.component';
import { UiTagsExamplesComponent } from './examples/tags/tags.component';
import { UiColorsExamplesComponent } from './examples/colors/colors.component';
import { UIExamplesIconsComponent } from './examples/icons/icons.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiLayoutComponent,
    UiTagsExamplesComponent,
    UiColorsExamplesComponent,
    UiCodeComponent,
    UIExamplesIconsComponent,
  ],
  exports: [UiLayoutComponent, UiCodeComponent],
})
export class UiModule {}
