import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  UiLayoutSplitterDirectionsTypes,
  UiLayoutSplitterSettings,
} from './splitter.interface';
import { UiLayoutSplitterService } from './splitter.service';
import { UiThemeTypes, UiThemeZoomTypes } from '../../../types/themes';
import { uiConfig } from '../../../types/ui-config';

@Component({
  selector: 'ui-layout-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss'],
})
export class UiLayoutSplitterComponent implements AfterViewInit {
  private storeName = 'splitter';

  public settings: UiLayoutSplitterSettings = {
    zoom: UiThemeZoomTypes.none,
    theme: UiThemeTypes.light,
    direction: 'center',
  };

  @Input() public cssPrefix = '';

  constructor(private splitterService: UiLayoutSplitterService) {}

  public ngAfterViewInit() {
    const localStore = this.splitterService.getData(this.storeName);
    if (localStore) {
      this.settings = <UiLayoutSplitterSettings>localStore;
    } else {
      this.splitterService.setData(this.storeName, this.settings);
    }
    this.zoom(this.settings.zoom);
    this.theme(this.settings.theme);
    this.direction(this.settings.direction);
  }

  public zoom(init?: string): void {
    const layout = document.getElementById(uiConfig.mainID);
    if (layout) {
      if (init) {
        layout.className = init;
      } else {
        this.settings.zoom === UiThemeZoomTypes.none
          ? (this.settings.zoom = UiThemeZoomTypes.zoom)
          : (this.settings.zoom = UiThemeZoomTypes.none);
        this.splitterService.setData(this.storeName, this.settings);
        layout.className = this.settings.zoom;
      }
    } else {
      console.error('HTML - Element not found:' + uiConfig.mainID);
    }
  }

  public theme(init?: UiThemeTypes | string) {
    const body: HTMLElement = document.body;
    if (init) {
      body.className = init;
    } else {
      this.settings.theme === this.cssPrefix + UiThemeTypes.dark
        ? (this.settings.theme = this.cssPrefix + UiThemeTypes.light)
        : (this.settings.theme = this.cssPrefix + UiThemeTypes.dark);
      body.className = this.settings.theme;
      this.splitterService.setData(this.storeName, this.settings);
      body.className = this.settings.theme;
    }
  }

  public direction(type: UiLayoutSplitterDirectionsTypes) {
    this.settings.direction = type;
    this.splitterService.setData(this.storeName, this.settings);
  }
}
