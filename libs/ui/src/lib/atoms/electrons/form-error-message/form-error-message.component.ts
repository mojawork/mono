import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ui-electron-form-error-message',
  templateUrl: './form-error-message.component.html',
})
export class UiElectronFormErrorMessageComponent {
  @Input() errors: ValidationErrors = {};
}
