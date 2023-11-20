import { Icon, MenuProps } from '@atl-transit/shared';

export interface Sidebar {
   icon: Icon;
   menu: MenuProps[];
}

export interface Links {
   label: string;
   url: string;
}
