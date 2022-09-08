import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './form-template-driven.md';
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { UiAtomsModule } from '../../../atoms/atoms.module';
import { UiExampleFormTemplateDrivenComponent } from './form-template-driven.component';

export default {
  title: 'Examples',
  component: UiExampleFormTemplateDrivenComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [NgControl, NgModel],
      declarations: [UiInternHeaderComponent],

      imports: [FormsModule, UiAtomsModule],
    }),
  ],
} as Meta<UiExampleFormTemplateDrivenComponent>;

const Template: Story<UiExampleFormTemplateDrivenComponent> = (
  args: UiExampleFormTemplateDrivenComponent
) => ({
  props: args,
});

export const FormTemplateDriven = Template.bind({});
FormTemplateDriven.args = {};
