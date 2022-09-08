import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class UiCodeComponent {
  @Input() label: string | null = null;
}
