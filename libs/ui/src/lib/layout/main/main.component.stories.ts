import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiLayoutMainComponent } from './main.component';

export default {
  title: 'Layout',
  component: UiLayoutMainComponent,
  parameters: {
    componentSubtitle: 'Layout Component.',
    docs: {
      page: null,
      iframeHeight: 400,
    },
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
     <strong header class="ui-ct-light">header</strong>
     <strong main class="ui-ct-primary">main</strong>
     <strong footer class="ui-ct-light">footer</strong>
  </ui-layout-main>`,
});

export const Main = Template.bind({});
Main.args = {};
