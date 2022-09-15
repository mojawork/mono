import { uiConfig } from './ui-config';

export const UiStorybookCssPrefix = 'ui-storybook ';

export enum UiThemeTypes {
  light = 'theme-light',
  dark = 'theme-dark',
}

export const UiThemeZoomTypes = {
  zoom: `${uiConfig.mainClass} m-zoom`,
  none: `${uiConfig.mainClass} none`,
};
