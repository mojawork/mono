import { Component } from '@angular/core';
import { UiStorybookCssPrefix } from '../../../../types/themes';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class UiExampleLayoutComponent {
  public prefix = UiStorybookCssPrefix;

  public action(message: string) {
    alert(message);
  }
}
