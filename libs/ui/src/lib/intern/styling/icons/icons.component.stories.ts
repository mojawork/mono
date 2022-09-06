import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiExampleStylingIconsComponent } from './icons.component';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './icons.md';

export default {
  title: 'styling',
  component: UiExampleStylingIconsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiInternHeaderComponent],
      imports: [],
    }),
  ],
} as Meta<UiExampleStylingIconsComponent>;

const Template: Story<UiExampleStylingIconsComponent> = (
  args: UiExampleStylingIconsComponent
) => ({
  props: args,
});

export const Icons = Template.bind({});
Icons.args = {};
