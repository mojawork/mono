import { moduleMetadata, Story, Meta } from '@storybook/angular';

import markdown from './input.md';
import markdownElectron from '../electrons/form-error-message/form-error-message.md';
import { FormsModule, NgControl, NgModel } from '@angular/forms';

import { UiInputComponent } from './input.component';
import { UiInternHeaderComponent } from '../../intern/header/header.component';
import { UiAtomsModule } from '../atoms.module';

export default {
  title: 'Atoms',
  component: UiInputComponent,

  parameters: {
    notes: { Introduction: markdown, 'Electron Notes': markdownElectron },
  },
  decorators: [
    moduleMetadata({
      providers: [NgControl, NgModel],
      declarations: [UiInternHeaderComponent],
      imports: [FormsModule, UiAtomsModule],
    }),
  ],
} as Meta<UiInputComponent>;

const Template: Story<UiInputComponent> = (args: UiInputComponent) => ({
  props: {
    ...args,
    value: '',
  },

  template: `
    <ui-intern-header></ui-intern-header>
    <section class="st-section">
      <h1>&lt;ui-input&gt;</h1>
      <hr />
    </section>

    <section class="st-section">
      <ui-input [label]="'game'" [errors]="null">
        <input
          ui-tag
          type="text"
        />
      </ui-input>

      <hr class="ui-dotted" />

      <ui-input [label]="'heightScore'" [errors]="heightScore.errors">
        <input
          ui-tag
          type="number"
          required
          name="heightScore"
          #heightScore="ngModel"
          [(ngModel)]="value"
        />
      </ui-input>

      <hr class="ui-dotted" />

      <ui-input [label]="'disabled'" [errors]="null">
        <input
          ui-tag
          type="text"
          disabled
        />
      </ui-input>
    </section>
  `,
});

export const Input = Template.bind({});
