import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiExampleStylingColorsComponent } from './colors.component';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './colors.md';

export default {
  title: 'Styling',
  component: UiExampleStylingColorsComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiInternHeaderComponent],
      imports: [],
    }),
  ],
} as Meta<UiExampleStylingColorsComponent>;

const Template: Story<UiExampleStylingColorsComponent> = (
  args: UiExampleStylingColorsComponent
) => ({
  props: args,
});

export const Colors = Template.bind({});
Colors.args = {};
