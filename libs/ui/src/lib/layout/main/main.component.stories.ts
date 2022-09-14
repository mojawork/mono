import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiLayoutMainComponent } from './main.component';
import markdown from './main.md';

export default {
  title: 'Layout',
  component: UiLayoutMainComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiLayoutMainComponent>;

const Template: Story<UiLayoutMainComponent> = (
  args: UiLayoutMainComponent
) => ({
  props: args,
  template: `
  <ui-layout-main>
     <strong main-header class="ui-ct-light">header</strong>
     <strong main-content class="ui-ct-primary">main</strong>
     <strong main-footer class="ui-ct-light">footer</strong>
  </ui-layout-main>`,
});

export const Main = Template.bind({});
Main.args = {};
