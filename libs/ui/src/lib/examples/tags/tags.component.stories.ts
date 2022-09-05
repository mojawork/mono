import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiTagsExamplesComponent } from './tags.component';
import markdown from './tags.md';

export default {
  title: 'Examples',
  component: UiTagsExamplesComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiTagsExamplesComponent>;

const Template: Story<UiTagsExamplesComponent> = (
  args: UiTagsExamplesComponent
) => ({
  props: args,
});

export const Tags = Template.bind({});
Tags.args = {};
