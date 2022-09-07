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
      ? { mojaworkInputForbiddenName: { value: control.value } }
      : null;
  };
}

@Directive({
  selector: '[mojaworkInputForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() mojaworkInputForbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.mojaworkInputForbiddenName
      ? forbiddenNameValidator(
          new RegExp(this.mojaworkInputForbiddenName, 'i')
        )(control)
      : null;
  }
}
