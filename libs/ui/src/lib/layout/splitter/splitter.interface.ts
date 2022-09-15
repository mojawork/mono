export type UiLayoutSplitterDirectionsTypes =
  | 'left'
  | 'center'
  | 'right'
  | 'split';

export interface UiLayoutSplitterSettings {
  zoom: string;
  theme: string;
  direction: UiLayoutSplitterDirectionsTypes;
}
