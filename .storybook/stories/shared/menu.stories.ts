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
      content: {
         title: 'Main Menu',
         mode: 'light',
         divider: true,
         items: [
            {
               content: {
                  label: 'Overview',
                  id: 'myButton'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'dark',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'dark'
               }
            }
         ]
      }
   }
};

export const MenuDark: Story = {
   args: {
      content: {
         title: 'Main Menu',
         mode: 'dark',
         divider: true,
         items: [
            {
               content: {
                  label: 'Overview',
                  id: 'myButton'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'dark',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'dark'
               }
            }
         ]
      }
   }
};
