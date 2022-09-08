import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiForbiddenValidatorDirective } from './input/input.validator.directive';
import { UiInputComponent } from './input/input.component';
import { UiCodeComponent } from './code/code.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UiForbiddenValidatorDirective,
    UiInputComponent,
    UiCodeComponent,
  ],
  exports: [UiInputComponent, UiCodeComponent, UiForbiddenValidatorDirective],
})
export class UiAtomsModule {}
