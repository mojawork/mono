import { Component } from '@angular/core';

@Component({
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.scss'],
})
export class UiExampleFormTemplateDrivenComponent {
  public submitted = false;

  public staticFormData = {
    game: 'space-invaders',
    heightScore: 99,
  };

  public onSubmit() {
    this.submitted = true;
  }
}
