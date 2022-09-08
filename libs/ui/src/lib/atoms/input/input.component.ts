import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { UiInputPositionType } from './input.interface';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiInputComponent implements OnChanges {
  @Input() label: string | null = null;
  @Input() errors: ValidationErrors | null = null;
  @Input() position: UiInputPositionType | null = null;

  public showErrors = false;

  public ngOnChanges() {
    if (this.errors) {
      this.showErrors = false;
    }
  }
}
