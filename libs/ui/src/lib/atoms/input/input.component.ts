import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UiInputComponentType } from './input.interface';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class UiInputComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() placeholder: string | null = null;
  @Input() type: UiInputComponentType | null = null;
  @Input() min: number | null = null;
  @Input() max: number | null = null;

  public test = 'test';

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {}
}
