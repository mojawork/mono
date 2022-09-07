import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiExampleStylingTagsComponent } from './styling/tags/tags.component';
import { UiExampleStylingColorsComponent } from './styling/colors/colors.component';
import { UiExampleStylingIconsComponent } from './styling/icons/icons.component';
import { UiExampleStylingFormsComponent } from './styling/forms/forms.component';
import { UiInternHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    UiInternHeaderComponent,
    UiExampleStylingTagsComponent,
    UiExampleStylingColorsComponent,
    UiExampleStylingIconsComponent,
    UiExampleStylingFormsComponent,
  ],
  imports: [CommonModule],
})
export class UiInternModule {}
