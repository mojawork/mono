import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiColorsExamplesComponent } from './colors.component';
import markdown from './colors.md';

export default {
  title: 'Examples',
  component: UiColorsExamplesComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiColorsExamplesComponent>;

const Template: Story<UiColorsExamplesComponent> = (
  args: UiColorsExamplesComponent
) => ({
  props: args,
});

export const Colors = Template.bind({});
Colors.args = {};
