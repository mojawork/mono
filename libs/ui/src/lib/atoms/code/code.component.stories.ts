import { moduleMetadata, Story, Meta } from '@storybook/angular';

import markdown from './code.md';
import { FormsModule, NgControl, NgModel } from '@angular/forms';

import { UiInternHeaderComponent } from '../../intern/header/header.component';
import { UiAtomsModule } from '../atoms.module';
import { UiCodeComponent } from './code.component';

export default {
  title: 'Atoms',
  component: UiCodeComponent,

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
} as Meta<UiCodeComponent>;

const Template: Story<UiCodeComponent> = (args: UiCodeComponent) => ({
  props: {
    ...args,
    defaultData: `
  <script>
    alert((Turrican) => 'is fantastic')
  </script>

  <html>
      <h1> Games</h1>
  </html>`,
    jsonData: {
      game: 'space-invaders',
      heightScore: 99,
    },
  },

  template: `
    <ui-intern-header></ui-intern-header>
    <section class="internal">
      <h1>&lt;ui-code&gt;</h1>
      <hr />
      <ui-code label="default - data(string) " [data]="defaultData"></ui-code>

      <hr class="ui-dotted" />

      <ui-code label="ng-content - type json(default)" type="json">
{{jsonData | json }}
      </ui-code>

<hr class="ui-dotted" />

      <ui-code label="ng-content - type html" type="html">
          <h1>headline</h1>
      </ui-code>
    </section>
  `,
});

export const Code = Template.bind({});
