import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiExampleStylingTagsComponent } from './tags.component';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './tags.md';

export default {
  title: 'Styling',
  component: UiExampleStylingTagsComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiInternHeaderComponent],
      imports: [],
    }),
  ],
} as Meta<UiExampleStylingTagsComponent>;

const Template: Story<UiExampleStylingTagsComponent> = (
  args: UiExampleStylingTagsComponent
) => ({
  props: args,
});

export const Tags = Template.bind({});
Tags.args = {};
