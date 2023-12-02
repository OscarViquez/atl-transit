import { Icon, MenuProps } from '@atl-transit/shared';

export interface Sidebar {
   icon: Icon;
   menu: MenuProps[];
}

export interface Links {
   label: string;
   url: string;
}

export interface SidebarContent {
   logo: Icon;
   button: SideBarButtonProps;
   menu: SidebarMenuItem[];
}

export interface SidebarMenuItem {
   title?: string;
   divider: boolean;
   items: string[];
 }

export interface SideBarButtonProps {
   category: 'navigation';
   type: 'menu';
   variant: 'primary';
   mode: 'light';
   align: 'left';
}
