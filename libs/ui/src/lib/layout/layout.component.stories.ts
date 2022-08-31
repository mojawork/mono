import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {UiLayoutComponent} from "./layout.component";


export default {
  title: 'Layout',
  component: UiLayoutComponent,
  parameters: {
    componentSubtitle: 'Layout Component.',
    docs: {
      page: null,
      iframeHeight: 400
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiLayoutComponent>;

const Template: Story<UiLayoutComponent> = (args: UiLayoutComponent) => ({
  props: args,
  template: `
  <mojawork-ui-layout>
     <strong header class="ui-ct-light">header</strong>
     <strong main class="ui-ct-primary">main</strong>
     <strong footer class="ui-ct-light">footer</strong>
  </mojawork-ui-layout>`,
});


export const LayoutComponent = Template.bind({});
LayoutComponent.args = {};
