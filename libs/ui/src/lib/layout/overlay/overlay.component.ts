import { Component, Input, OnChanges } from '@angular/core';
import { UILayoutOverlayDirectionsType } from './overlay.interface';

@Component({
  selector: 'ui-layout-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class UiLayoutOverlayComponent implements OnChanges {
  @Input() public active = false;
  @Input() public direction: UILayoutOverlayDirectionsType = 'center';

  public visible = false;
  public animation = false;

  public activate() {
    this.visible = true;
    setTimeout(() => {
      this.animation = true;
    }, 200);
  }

  public deactivate() {
    this.animation = false;
    setTimeout(() => {
      this.visible = false;
    }, 1200);
  }

  ngOnChanges() {
    this.active ? this.activate() : this.deactivate();
  }
}
