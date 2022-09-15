import { moduleMetadata, Story, Meta } from '@storybook/angular';

import markdown from './color.md';

import { FormsModule, NgControl, NgModel } from '@angular/forms';

import { UiInternHeaderComponent } from '../../intern/header/header.component';
import { UiAtomsModule } from '../atoms.module';
import { UiColorComponent } from './color.component';

export default {
  title: 'Atoms',
  component: UiColorComponent,

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
} as Meta<UiColorComponent>;

const Template: Story<UiColorComponent> = (args: UiColorComponent) => ({
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
      <h1>&lt;ui-color&gt;</h1>
      <hr />
      <h3>interactive</h3>
      <ui-color cssClass="animate" [color]="action ? colors[0] : colors[1]">
        <div class="st-margin st-padding">
        <button (click)="action = !action">change color</button>
        </div>
      </ui-color>
      <hr>
    </section>

    <section class="st-section">
        <h3>static</h3>
        <div class="st-grid" style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
          <ui-color *ngFor="let item of colors" cssClass="animate" [color]="item">
            <div class="st-margin st-padding">
              <strong>color: {{item}}</strong>
            </div>
          </ui-color>
        </div>
        <hr class="ui-dotted" />
        <div class="st-grid" style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
          <ui-color *ngFor="let item of cssVars" [color]="item">
            <div class="st-margin st-padding">
              <strong>color: {{item}}</strong>
            </div>
          </ui-color>
        </div>
        <hr class="ui-dotted" />
        <div class="st-grid" style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
          <ui-color *ngFor="let item of cssVarsGlobal" [color]="item">
            <div class="st-margin st-padding">
              <strong>color: {{item}}</strong>
            </div>
          </ui-color>
        </div>
   </section>
  `,
});

export const Color = Template.bind({});
