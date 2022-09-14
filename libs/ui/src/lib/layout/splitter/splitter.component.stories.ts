import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { UiAtomsModule } from '../../atoms/atoms.module';
import { UiInternHeaderComponent } from '../../intern/header/header.component';
import markdown from './splitter.md';
import { UiLayoutSplitterComponent } from './splitter.component';
import { UiStorybookCssPrefix } from '../../../types/themes';

export default {
  title: 'Layout',
  component: UiLayoutSplitterComponent,
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
} as Meta<UiLayoutSplitterComponent>;

const Template: Story<UiLayoutSplitterComponent> = (
  args: UiLayoutSplitterComponent
) => ({
  props: {
    ...args,
    prefix: UiStorybookCssPrefix,
    action: () => alert('action'),
  },
  template: `
    <ui-intern-header></ui-intern-header>
    <section class="st-section">
      <h1>&lt;ui-layout-splitter&gt;</h1>
      <hr />
    </section>
    <section class="st-section">
      <ui-layout-splitter [cssPrefix]="prefix">
        <div splitter-header class="st-float flat">
         <button (click)="action()" class="ui-icon">star</button>
         <span>Header - Component Actions</span>
        </div>
        <div splitter-left>left</div>
        <div splitter-right>right</div>
      </ui-layout-splitter>
    </section>
    `,
});

export const Splitter = Template.bind({});
Splitter.args = {};
