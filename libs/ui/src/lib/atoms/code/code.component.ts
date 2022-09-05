import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mojawork-ui-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiCodeComponent implements OnInit {
  @Input() code: string | null = null;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {}
}
