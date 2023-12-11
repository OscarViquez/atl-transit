import { BadgeComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Atoms/Badge',
   component: BadgeComponent,
   decorators: [moduleMetadata({ imports: [BadgeComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<BadgeComponent>;

type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
   render: () => ({
      template: `
      <rya-badge color="gold">
         gold
      </rya-badge>

      <br/>
      <br/>

      <rya-badge color="red">
         red
      </rya-badge>
     `
   })
};
