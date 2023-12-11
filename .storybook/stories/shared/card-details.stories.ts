import { CardDetailsComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Molecules/Card Details',
   component: CardDetailsComponent,
   decorators: [moduleMetadata({ imports: [CardDetailsComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<CardDetailsComponent>;

type Story = StoryObj<CardDetailsComponent>;

export const Default: Story = {
   render: () => ({
      template: `
      <rya-card-details />
     `
   })
};
