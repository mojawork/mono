import { UiThemeTypes, UiThemeZoomTypes } from '../../../types/themes';
export type UiLayoutSplitterDirectionsTypes =
  | 'left'
  | 'center'
  | 'right'
  | 'split';

export interface UiLayoutSplitterSettings {
  zoom: UiThemeZoomTypes;
  theme: UiThemeTypes | string;
  direction: UiLayoutSplitterDirectionsTypes;
}
