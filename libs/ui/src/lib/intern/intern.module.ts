import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiExampleStylingTagsComponent } from './styling/tags/tags.component';
import { UiExampleStylingColorsComponent } from './styling/colors/colors.component';
import { UiExampleStylingIconsComponent } from './styling/icons/icons.component';
import { UiExampleStylingFormsComponent } from './styling/forms/forms.component';
import { UiInternHeaderComponent } from './header/header.component';

import { UiAtomsModule } from '../atoms/atoms.module';
import { FormsModule } from '@angular/forms';
import { UiExampleFormTemplateDrivenComponent } from './exampels/form-template-driven/form-template-driven.component';
import { UiExampleLayoutComponent } from './exampels/layout/layout.component';
import { UiLayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    UiInternHeaderComponent,
    UiExampleStylingTagsComponent,
    UiExampleStylingColorsComponent,
    UiExampleStylingIconsComponent,
    UiExampleStylingFormsComponent,
    UiExampleFormTemplateDrivenComponent,
    UiExampleLayoutComponent,
  ],
  imports: [CommonModule, UiLayoutModule, UiAtomsModule, FormsModule],
})
export class UiInternModule {}
