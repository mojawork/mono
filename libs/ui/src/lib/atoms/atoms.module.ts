import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiForbiddenValidatorDirective } from './input/input.validator.directive';
import { UiInputComponent } from './input/input.component';
import { UiCodeComponent } from './code/code.component';
import { UiElectronFormErrorMessageComponent } from './_electrons/form-error-message/form-error-message.component';
import { UiColorComponent } from './color/color.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UiForbiddenValidatorDirective,
    UiInputComponent,
    UiCodeComponent,
    UiColorComponent,
    UiElectronFormErrorMessageComponent,
  ],
  exports: [
    UiInputComponent,
    UiCodeComponent,
    UiColorComponent,
    UiForbiddenValidatorDirective,
  ],
})
export class UiAtomsModule {}
