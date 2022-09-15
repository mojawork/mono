import { Component, ViewEncapsulation } from '@angular/core';
import { uiConfig } from '../../../types/ui-config';

@Component({
  selector: 'ui-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiLayoutMainComponent {
  public config = uiConfig;
}
