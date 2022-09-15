import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { UiAtomsModule } from '../../atoms/atoms.module';
import { UiInternHeaderComponent } from '../../intern/header/header.component';
import markdown from './tabs.md';

import { UiLayoutTabsComponent } from './tabs.component';

export default {
  title: 'Layout',
  component: UiLayoutTabsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [],
      declarations: [UiInternHeaderComponent],
      imports: [UiAtomsModule],
    }),
  ],
} as Meta<UiLayoutTabsComponent>;

const Template: Story<UiLayoutTabsComponent> = (
  args: UiLayoutTabsComponent
) => ({
  props: {
    ...args,
  },
  template: `
    <ui-intern-header></ui-intern-header>

    <section class="st-section">

      <h1>&lt;ui-layout-tabs&gt;</h1>
      <hr />

      <h3>default tab labels</h3>
        <ui-layout-tabs>
          <section>01</section>
          <section>02</section>
          <section>03</section>
          <section>04</section>
          <section>05</section>
          <section>06</section>
          <section>07</section>
          <section>08</section>
          <section>09</section>
        </ui-layout-tabs>

      <hr class="ui-dotted"/>

      <h3>costume tab labels</h3>

      <ui-layout-tabs [tabNames]="['Turrican','Pacman','Bobble Bubble', 'Double Dragon']">
        <section>Turrican Score: 24</section>
        <section>Pacman Score: 101010001</section>
        <section>Bobble Bubble Score: #ff00ff</section>
        <section>Double Dragon Score: XXXX</section>
      </ui-layout-tabs>

     </section>
    `,
});

export const Tabs = Template.bind({});
Tabs.args = {};
