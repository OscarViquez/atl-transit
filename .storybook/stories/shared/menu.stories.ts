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
                  href: 'https://www.google.com/maps',
                  id: 'myButton'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'light',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'light'
               }
            },
            {
               content: {
                  label: 'Trains'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'light',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'light'
               }
            },
            {
               content: {
                  label: 'Buses'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'light',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'light'
               }
            },
            {
               content: {
                  label: 'Plan Trip'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'light',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'light'
               }
            },
            {
               content: {
                  label: 'Alerts'
               },
               type: 'menu',
               variant: 'primary',
               mode: 'light',
               align: 'left',
               icon: {
                  category: 'navigation',
                  name: 'overview',
                  mode: 'light'
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
            },
            {
               content: {
                  label: 'Trains'
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
            },
            {
               content: {
                  label: 'Buses'
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
            },
            {
               content: {
                  label: 'Plan Trip'
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
            },
            {
               content: {
                  label: 'Alerts'
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
