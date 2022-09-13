import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UiThemeTypes } from '../../../types/themes';

@Component({
  selector: 'ui-intern-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiInternHeaderComponent implements OnInit {
  private cssPrefix = 'ui-storybook ';
  public selectedtheme = this.cssPrefix + UiThemeTypes.light;

  public ngOnInit(): void {
    console.log('start examples');
  }

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
