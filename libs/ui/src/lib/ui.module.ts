import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout/layout.component';

import { UiExampleStylingTagsComponent } from './intern/styling/tags/tags.component';
import { UiExampleStylingColorsComponent } from './intern/styling/colors/colors.component';
import { UiExampleStylingIconsComponent } from './intern/styling/icons/icons.component';
import { UiInternHeaderComponent } from './intern/header/header.component';
import { UiExampleStylingFormsComponent } from './intern/styling/forms/forms.component';
import { UiInputComponent } from './atoms/input/input.component';
import { UiExampleInputComponent } from './intern/exampels/input/input.component';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './atoms/input/input.validator.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UiLayoutComponent,
    UiInputComponent,
    UiExampleStylingTagsComponent,
    UiExampleStylingColorsComponent,
    UiExampleStylingIconsComponent,
    UiExampleStylingFormsComponent,
    UiInternHeaderComponent,
    UiExampleInputComponent,
    ForbiddenValidatorDirective,
  ],
  exports: [UiLayoutComponent, UiInputComponent],
  providers: [],
})
export class UiModule {}
