import { BottomBarComponent } from '@atl-transit/navigation';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Navigation/Bottom Bar',
   component: BottomBarComponent,
   decorators: [moduleMetadata({ imports: [BottomBarComponent] })],
   parameters: {
      docs: {
         description: {
            component: ''
         }
      }
   }
} as Meta<BottomBarComponent>;

type Story = StoryObj<BottomBarComponent>;

export const Default: Story = {
   args: {

   }
};

