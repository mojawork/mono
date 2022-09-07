import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './input.md';
import { UiExampleInputComponent } from './input.component';
import { UiInputComponent } from '../../../atoms/input/input.component';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Examples',
  component: UiExampleInputComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      declarations: [UiInternHeaderComponent, UiInputComponent],
      imports: [FormsModule],
    }),
  ],
} as Meta<UiExampleInputComponent>;

const Template: Story<UiExampleInputComponent> = (
  args: UiExampleInputComponent
) => ({
  props: args,
});

export const Input = Template.bind({});
Input.args = {};
