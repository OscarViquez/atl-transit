import { CardComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Atoms/Card',
   component: CardComponent,
   decorators: [moduleMetadata({ imports: [CardComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a Header component that can be used in different themes.'
         }
      }
   }
} as Meta<CardComponent>;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
   render: () => ({
      template: `
      <rya-card [spacing]="'small'" [borderRadius]="'medium'" [shadow]="true">
         <h2>Card</h2> 
      </rya-card>
     `
   })
};
