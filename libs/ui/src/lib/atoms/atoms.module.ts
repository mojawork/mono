import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './input/input.validator.directive';
import { UiInputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ForbiddenValidatorDirective, UiInputComponent],
  exports: [UiInputComponent],
})
export class UiAtomsModule {}
