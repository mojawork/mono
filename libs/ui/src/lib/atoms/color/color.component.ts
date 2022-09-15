import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UiColorCssClassesType } from './color.interface';

@Component({
  selector: 'ui-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiColorComponent {
  @Input() cssClass: UiColorCssClassesType | null = null;
  @Input() color: string | null = null;
}
