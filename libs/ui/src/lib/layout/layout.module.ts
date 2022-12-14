import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutMainComponent } from './main/main.component';
import { UILayoutSpinnerComponent } from './spinner/spinner.component';
import { UiLayoutOverlayComponent } from './overlay/overlay.component';
import { UiLayoutSplitterComponent } from './splitter/splitter.component';
import { UiLayoutTabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    UiLayoutMainComponent,
    UILayoutSpinnerComponent,
    UiLayoutOverlayComponent,
    UiLayoutSplitterComponent,
    UiLayoutTabsComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiLayoutMainComponent,
    UILayoutSpinnerComponent,
    UiLayoutOverlayComponent,
    UiLayoutSplitterComponent,
    UiLayoutTabsComponent,
  ],
})
export class UiLayoutModule {}
