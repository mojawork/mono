import { Component, ViewEncapsulation } from '@angular/core';
import { UiStorybookCssPrefix, UiThemeTypes } from '../../../types/themes';

@Component({
  selector: 'ui-intern-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiInternHeaderComponent {
  private cssPrefix = UiStorybookCssPrefix;
  public selectedtheme = this.cssPrefix + UiThemeTypes.light;

  public theme(init?: UiThemeTypes) {
    const body: HTMLElement = document.body;
    if (init) {
      body.className = init;
    } else {
      this.selectedtheme === this.cssPrefix + UiThemeTypes.dark
        ? (this.selectedtheme = this.cssPrefix + UiThemeTypes.light)
        : (this.selectedtheme = this.cssPrefix + UiThemeTypes.dark);
      body.className = this.selectedtheme;
    }
  }
}
