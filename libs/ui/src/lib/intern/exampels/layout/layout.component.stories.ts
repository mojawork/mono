import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiInternHeaderComponent } from '../../header/header.component';
import markdown from './layout.md';
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { UiAtomsModule } from '../../../atoms/atoms.module';
import { UiExampleLayoutComponent } from './layout.component';
import { UiLayoutModule } from '../../../layout/layout.module';

export default {
  title: 'Examples',
  component: UiExampleLayoutComponent,

  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [NgControl, NgModel],
      declarations: [UiInternHeaderComponent],

      imports: [FormsModule, UiLayoutModule, UiAtomsModule],
    }),
  ],
} as Meta<UiExampleLayoutComponent>;

const Template: Story<UiExampleLayoutComponent> = (
  args: UiExampleLayoutComponent
) => ({
  props: args,
});

export const Layout = Template.bind({});
Layout.args = {};
