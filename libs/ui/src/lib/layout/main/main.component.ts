import { Component, ViewEncapsulation } from '@angular/core';
import { uiIdMain } from '../../../types/ui-ids';

@Component({
  selector: 'ui-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiLayoutMainComponent {
  public id = uiIdMain;
}
