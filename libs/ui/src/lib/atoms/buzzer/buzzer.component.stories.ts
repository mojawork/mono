import { moduleMetadata, Story, Meta } from '@storybook/angular';

import markdown from './buzzer.md';

import { FormsModule, NgControl, NgModel } from '@angular/forms';

import { UiInternHeaderComponent } from '../../intern/header/header.component';
import { UiAtomsModule } from '../atoms.module';
import { UiBuzzerComponent } from './buzzer.component';

export default {
  title: 'Atoms',
  component: UiBuzzerComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [NgControl, NgModel],
      declarations: [UiInternHeaderComponent],
      imports: [FormsModule, UiAtomsModule],
    }),
  ],
} as Meta<UiBuzzerComponent>;

const Template: Story<UiBuzzerComponent> = (args: UiBuzzerComponent) => ({
  props: {
    ...args,
    colors: ['#ffcdff', '#cfcfff', '#cfffcf', '#ffcfcf', '#cfcfcf'],
    cssVars: [
      'var(--ui-cb-main)',
      'var(--ui-cb-primary)',
      'var(--ui-cb-secondary)',
      'var(--ui-cb-thirdly)',
      'var(--ui-cbt-primary)',
    ],
    cssVarsGlobal: [
      'var(--ui-c-success)',
      'var(--ui-c-error)',
      'var(--ui-c-warning)',
      'var(--ui-c-focus)',
      'var(--ui-c-action)',
    ],
    action: false,
  },

  template: `
    <ui-intern-header></ui-intern-header>

    <section class="st-section">
    <h1>&lt;ui-buzzer&gt;</h1>
    <hr />

    <section class="st-section">
      <div class="st-grid" style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
        <ui-buzzer *ngFor="let item of cssVars; let i=index" [color]="item">{{i}}</ui-buzzer>
      </div>
    </section>
    <section class="st-section">
      <div class="st-grid" style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
        <ui-buzzer *ngFor="let item of cssVarsGlobal; let i=index" [color]="item">{{i}}</ui-buzzer>
      </div>
    </section>
  `,
});

export const Buzzer = Template.bind({});
