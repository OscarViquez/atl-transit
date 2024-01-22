import { LayoutDirective } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Directives/Layout',
   component: LayoutDirective,
   decorators: [moduleMetadata({ imports: [LayoutDirective] })],
   parameters: {
      docs: {
         description: {
            component: ''
         }
      }
   }
} as Meta<LayoutDirective>;

type Story = StoryObj<LayoutDirective>;

export const Default: Story = {
   render: () => ({
      template: `

      `
   })
};
