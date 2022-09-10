import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { UiCodeTypes } from './code.interface';

@Component({
  selector: 'ui-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class UiCodeComponent implements AfterViewInit {
  public html: string | undefined;
  @ViewChild('code') public code: ElementRef<HTMLInputElement> | undefined;
  @Input() data: string | null = null;
  @Input() label: string | null = null;
  @Input() type: UiCodeTypes = 'json';

  ngAfterViewInit(): void {
    this.html = this.code?.nativeElement.innerHTML;
  }
}
