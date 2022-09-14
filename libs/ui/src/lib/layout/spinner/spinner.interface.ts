type UiLayoutSpinnerViewType = 'showIn' | 'showOut' | 'none' | 'error';

export interface UiLayoutSpinnerSettings {
  error?: string;
  show: UiLayoutSpinnerViewType;
}
