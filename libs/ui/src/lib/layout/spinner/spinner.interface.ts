type UiLayoutSpinnerViewType = 'showIn' | 'showOut' | 'none' | 'error';

export interface UiLayoutSpinnerView {
  error?: string;
  show: UiLayoutSpinnerViewType;
}
