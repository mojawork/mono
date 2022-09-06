import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mojawork-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class UiInputComponent implements OnInit {
  @Input() type: string | null = null;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    console.log(this.type);
  }
}
