import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiColorsExamplesComponent } from './colors.component';
import markdown from './colors.md';
import { UiInternHeaderComponent } from '../../intern/header/header.component';

export default {
  title: 'Examples',
  component: UiColorsExamplesComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiColorsExamplesComponent, UiInternHeaderComponent],
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
