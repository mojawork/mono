import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UiLayoutSpinnerView } from './spinner.interface';

@Injectable({
  providedIn: 'root',
})
export class UiLayoutSpinnerService {
  private STATUS = new BehaviorSubject<UiLayoutSpinnerView>({
    show: 'none',
  });

  public startSpinner(): void {
    this.STATUS.next({
      show: 'showIn',
    });
  }

  public errorSpinner(error: string): void {
    this.STATUS.next({
      error,
      show: 'error',
    });
  }

  public successSpinner(): void {
    if (this.STATUS.subscribe((status) => !status.error)) {
      this.STATUS.next({
        show: 'showOut',
      });
      setTimeout(() => {
        this.STATUS.next({
          show: 'none',
        });
      }, 1200);
    }
  }

  public getSpinner(): Observable<UiLayoutSpinnerView> {
    return this.STATUS;
  }
}
