import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ui-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.scss'],
})
export class UiBuzzerComponent {
  @Input() color: string | null = null;

  constructor(private _elementRef: ElementRef) {}

  public click() {
    setTimeout(() => {
      this._elementRef.nativeElement.querySelector('button').blur();
    }, 100);
  }
}
