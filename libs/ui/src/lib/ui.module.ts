import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout/layout.component';

import { UiExampleStylingTagsComponent } from './intern/styling/tags/tags.component';
import { UiExampleStylingColorsComponent } from './intern/styling/colors/colors.component';
import { UiExampleStylingIconsComponent } from './intern/styling/icons/icons.component';
import { UiInternHeaderComponent } from './intern/header/header.component';
import { UiExampleStylingFormsComponent } from './intern/styling/forms/forms.component';
import { UiInputComponent } from './atoms/input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiLayoutComponent,
    UiInputComponent,
    UiExampleStylingTagsComponent,
    UiExampleStylingColorsComponent,
    UiExampleStylingIconsComponent,
    UiExampleStylingFormsComponent,
    UiInternHeaderComponent,
  ],
  exports: [UiLayoutComponent, UiInputComponent],
})
export class UiModule {}
