import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutMainComponent } from './main/main.component';
import { UILayoutSpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [UiLayoutMainComponent, UILayoutSpinnerComponent],
  imports: [CommonModule],
  exports: [UiLayoutMainComponent, UILayoutSpinnerComponent],
})
export class UiLayoutModule {}
