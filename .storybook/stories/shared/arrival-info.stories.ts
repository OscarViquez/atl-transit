import { ArrivalInfoComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Molecules/Arrival Info',
   component: ArrivalInfoComponent,
   decorators: [moduleMetadata({ imports: [ArrivalInfoComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<ArrivalInfoComponent>;

type Story = StoryObj<ArrivalInfoComponent>;

export const Default: Story = {
   render: () => ({
      template: `
      <rya-arrival-info />
     `
   })
};
