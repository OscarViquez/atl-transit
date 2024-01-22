import { MenuComponent } from '@atl-transit/shared';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

export default {
   title: 'Molecules/Menu',
   component: MenuComponent,
   decorators: [moduleMetadata({ imports: [MenuComponent] })],
   parameters: {
      docs: {
         description: {
            component: 'This is a button component that can be used in different themes.'
         }
      }
   }
} as Meta<MenuComponent>;

type Story = StoryObj<MenuComponent>;

export const MenuLight: Story = {
   args: {

   }
};
