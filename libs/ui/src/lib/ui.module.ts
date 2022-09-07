import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiLayoutModule } from './layout/layout.module';
import { UiInternModule } from './intern/intern.module';
import { UiAtomsModule } from './atoms/atoms.module';

@NgModule({
  imports: [CommonModule, UiInternModule, UiAtomsModule, UiLayoutModule],

  exports: [UiLayoutModule, UiAtomsModule],
  providers: [],
})
export class UiModule {}
