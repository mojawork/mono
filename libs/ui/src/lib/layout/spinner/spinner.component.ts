import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { UiLayoutSpinnerSettings } from './spinner.interface';
import { interval, Subscription } from 'rxjs';
import { UiLayoutSpinnerService } from './spinner.service';

@Component({
  selector: 'ui-layout-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class UILayoutSpinnerComponent implements OnInit, OnDestroy {
  public status: UiLayoutSpinnerSettings = {
    show: 'none',
  };
  public animation = false;
  public infinity = false;
  public infinityInterval = interval(2000);
  private subscriptionService: Subscription = new Subscription();
  private subscriptionInfinity: Subscription = new Subscription();
  @Input() public debug = false;

  constructor(public spinnerService: UiLayoutSpinnerService) {}

  public ngOnInit() {
    this.subscriptionService.add(
      this.spinnerService.getSpinner().subscribe((SHOW) => {
        this.status = SHOW;

        if (
          (this.status.show === 'showIn' || this.status.show === 'error') &&
          !this.infinity
        ) {
          this.startInfinity();
        }

        if (this.status.show === 'none') {
          this.stopInfinity();
        }
      })
    );
  }

  private startInfinity() {
    this.infinity = true;
    this.animation = true;
    this.subscriptionInfinity = this.infinityInterval.subscribe((next) => {
      this.animation = !this.animation;
    });
  }

  private stopInfinity() {
    this.infinity = false;
    this.animation = false;
    this.subscriptionInfinity.unsubscribe();
  }

  public ngOnDestroy() {
    this.subscriptionService.unsubscribe();
    this.subscriptionInfinity.unsubscribe();
  }
}
