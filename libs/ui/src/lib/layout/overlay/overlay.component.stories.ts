import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { UiAtomsModule } from '../../atoms/atoms.module';
import { UiInternHeaderComponent } from '../../intern/header/header.component';
import markdown from './overlay.md';
import { UiLayoutOverlayComponent } from './overlay.component';

export default {
  title: 'Layout',
  component: UiLayoutOverlayComponent,
  parameters: {
    notes: markdown,
  },
  decorators: [
    moduleMetadata({
      providers: [],
      declarations: [UiInternHeaderComponent],
      imports: [UiAtomsModule],
    }),
  ],
} as Meta<UiLayoutOverlayComponent>;

const Template: Story<UiLayoutOverlayComponent> = (
  args: UiLayoutOverlayComponent
) => ({
  props: {
    ...args,
    active: false,
    direction: 'null',
    action: () => alert('ok'),
  },
  template: `
    <ui-intern-header></ui-intern-header>
    <section class="st-section">
      <h1>&lt;ui-layout-overlay&gt;</h1>
      <hr />
      <div class="st-float">
        <button (click)="direction='left';active=true">
            active - left
        </button>
        <button (click)="direction='right';active=true">
            active - right
        </button>
        <button (click)="direction='top';active=true">
            active - top
        </button>
        <button (click)="direction='bottom';active=true">
            active - bottom
        </button>
        <button (click)="direction='center';active=true">
            active - center (default)
        </button>
      </div>
    </section>
    <ui-layout-overlay [direction]="direction" [active]="active">
        <h4 overlay-header>
        ng-content: overlay-header
        </h4>
        <div overlay-content >
            ng-content: overlay-content
            <hr>
            <button (click)="active=false">active = false</button>
            <hr>
            <div class="st-float">
                <button (click)="active=false">cancel</button>
                <button (click)="active=false; action()">ok</button>
            </div>
        </div>
        <span overlay-footer>
        ng-content: overlay-footer
        </span>

</ui-layout-overlay>`,
});

export const Overlay = Template.bind({});
Overlay.args = {};
