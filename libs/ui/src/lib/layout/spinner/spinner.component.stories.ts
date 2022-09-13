import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UILayoutSpinnerComponent } from './spinner.component';
import { UiLayoutSpinnerService } from './spinner.service';
import { UiAtomsModule } from '../../atoms/atoms.module';
import { UiInternHeaderComponent } from '../../intern/header/header.component';
import markdown from './spinner.md';

export default {
  title: 'Layout',
  component: UILayoutSpinnerComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [UiLayoutSpinnerService],
      declarations: [UiInternHeaderComponent],
      imports: [UiAtomsModule],
    }),
  ],
} as Meta<UILayoutSpinnerComponent>;

const Template: Story<UILayoutSpinnerComponent> = (
  args: UILayoutSpinnerComponent
) => ({
  props: args,
  template: `
    <ui-intern-header style="z-index:100"></ui-intern-header>
    <section class="internal">
      <h1>&lt;ui-layout-spinner&gt;</h1>
      <hr />
    </section>
    <ui-layout-spinner [debug]="true"></ui-layout-spinner>`,
});

export const Spinner = Template.bind({});
Spinner.args = {
  debug: true,
};
