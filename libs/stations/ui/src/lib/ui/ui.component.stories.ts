import type { Meta, StoryObj } from '@storybook/angular';
import { UiComponent } from './ui.component';

const meta: Meta<UiComponent> = {
  component: UiComponent,
  title: 'UiComponent',
};
export default meta;
type Story = StoryObj<UiComponent>;

export const Primary: Story = {
  args: {},
};
