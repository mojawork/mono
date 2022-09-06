import { moduleMetadata, Story, Meta } from '@storybook/angular';
import markdown from './icons.md';
import { UiExamplesIconsComponent } from './icons.component';
import { UiColorsExamplesComponent } from '../colors/colors.component';
import { UiInternHeaderComponent } from '../../intern/header/header.component';

export default {
  title: 'Examples',
  component: UiExamplesIconsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiColorsExamplesComponent, UiInternHeaderComponent],
      imports: [],
    }),
  ],
} as Meta<UiExamplesIconsComponent>;

const Template: Story<UiExamplesIconsComponent> = (
  args: UiExamplesIconsComponent
) => ({
  props: args,
});

export const Icons = Template.bind({});
Icons.args = {};
