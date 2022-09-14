import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutMainComponent } from './main/main.component';
import { UILayoutSpinnerComponent } from './spinner/spinner.component';
import { UiLayoutOverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    UiLayoutMainComponent,
    UILayoutSpinnerComponent,
    UiLayoutOverlayComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiLayoutMainComponent,
    UILayoutSpinnerComponent,
    UiLayoutOverlayComponent,
  ],
})
export class UiLayoutModule {}
