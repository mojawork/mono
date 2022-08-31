import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TagsComponent } from './tags.component';

export default {
  title: 'Examples',
  component: TagsComponent,
  parameters: {
    componentSubtitle: 'Tags.',
    docs: {
      page: null,
      iframeHeight: 400
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TagsComponent>;

const Template: Story<TagsComponent> = (args: TagsComponent) => ({
  props: args,
});


export const Tags = Template.bind({});
Tags.args = {
}
