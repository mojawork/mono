import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiExampleStylingFormsComponent } from './forms.component';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './forms.md';

export default {
  title: 'Styling',
  component: UiExampleStylingFormsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiInternHeaderComponent],
      imports: [],
    }),
  ],
} as Meta<UiExampleStylingFormsComponent>;

const Template: Story<UiExampleStylingFormsComponent> = (
  args: UiExampleStylingFormsComponent
) => ({
  props: args,
});

export const Forms = Template.bind({});
Forms.args = {};
