import { moduleMetadata, Story, Meta } from '@storybook/angular';
import markdown from './icons.md';
import { UIExamplesIconsComponent } from './icons.component';

export default {
  title: 'Examples',
  component: UIExamplesIconsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UIExamplesIconsComponent>;

const Template: Story<UIExamplesIconsComponent> = (
  args: UIExamplesIconsComponent
) => ({
  props: args,
});

export const Icons = Template.bind({});
Icons.args = {};
