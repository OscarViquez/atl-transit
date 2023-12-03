import { Sidebar } from '@atl-transit/navigation';

export const sideBarMocks: Sidebar = {
   icon: {
      category: 'navigation',
      name: 'logo',
      mode: 'light'
   },
   menu: [
      {
         title: 'Main Menu',
         mode: '',
         divider: true,
         items: [
            {
               content: {
                  label: 'Overview',
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
            }
         ]
      }
   ]
};
