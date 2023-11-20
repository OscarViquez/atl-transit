import { SidebarContent } from "../models/interface";

export const sideBarContent: SidebarContent = {
   logo: {
      category: 'navigation',
      name: 'logo',
      mode: 'light'
   },
   button: {
      category: 'navigation',
      type: 'menu',
      variant: 'primary',
      mode: 'light',
      align: 'left'
   },
   menu: [
      {
         title: 'Main Menu',
         divider: true,
         items: ['Overview', 'Trains', 'Buses', 'Plan Trip', 'Alerts']
      },
      {
         title: 'Quick Links',
         divider: true,
         items: ['Accessibility', 'Parking Areas', 'Breezecard']
      }
   ]
};