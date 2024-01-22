import { BadgeDirective } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Directives/Badge',
   component: BadgeDirective,
   decorators: [moduleMetadata({ imports: [BadgeDirective] })],
   parameters: {
      docs: {
         description: {
            component: ''
         }
      }
   }
} as Meta<BadgeDirective>;

type Story = StoryObj<BadgeDirective>;

export const Default: Story = {
   render: () => ({
      template: `<span ryaBadge color="info">Badge</span>`
   })
};
