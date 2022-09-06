import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiTagsExamplesComponent } from './tags.component';
import markdown from './tags.md';
import { UiColorsExamplesComponent } from '../colors/colors.component';
import { UiInternHeaderComponent } from '../../intern/header/header.component';

export default {
  title: 'Examples',
  component: UiTagsExamplesComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiColorsExamplesComponent, UiInternHeaderComponent],
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
