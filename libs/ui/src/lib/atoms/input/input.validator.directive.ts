import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? { uiInputForbiddenName: { value: control.value } }
      : null;
  };
}

@Directive({
  selector: '[uiInputForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UiForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class UiForbiddenValidatorDirective implements Validator {
  @Input() uiInputForbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.uiInputForbiddenName
      ? forbiddenNameValidator(new RegExp(this.uiInputForbiddenName, 'i'))(
          control
        )
      : null;
  }
}
