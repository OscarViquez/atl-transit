import { Icon } from '@atl-transit/shared';
import { NavigationItem } from '../models/interfaces';

/*
 * This file stores content for sidebar, navbar, or any other navigation component.
 *
 * ==================================================================
 *
 * Best Practices for Mocks:
 * 1. Variables should be named in all caps and end with _MOCKS.
 * 2. All Mocks should be exported at the bottom of the file in the NAVIGATION_FEATURE_MOCKS object.
 * 3. If the content is static, it should be stored in mocks.ts.
 */

const LOGO_MOCKS: Icon = {
   category: 'navigation',
   name: 'logo',
   mode: 'light'
};

const ICON_MOCKS: Icon = {
   category: 'navigation',
   name: 'icon'
};

const BOTTOM_BAR_MOCKS: NavigationItem[] = [
   {
      label: 'Overview',
      icon: 'overview',
      route: '/overview'
   },
   {
      label: 'Trains',
      icon: 'train',
      route: '/trains'
   },
   {
      label: 'Bus',
      icon: 'bus',
      route: '/bus'
   },
   {
      label: 'Breeze',
      icon: 'breezecard',
      route: '/breeze'
   }
   // * Menu has no route because it is a modal.
   // * Menu will be disabled until other features are created
   // {
   //    label: 'Menu',
   //    icon: 'menu'
   // }
];

const SIDEBAR_MOCKS: NavigationItem[] = [
   {
      label: 'Overview',
      icon: 'overview',
      route: '/overview'
   },
   {
      label: 'Trains',
      icon: 'train',
      route: '/trains'
   },
   {
      label: 'Bus',
      icon: 'bus',
      route: '/bus'
   },
   {
      label: 'Breeze',
      icon: 'breezecard',
      route: '/breeze'
   }
];

export const NAVIGATION_FEATURE_MOCKS = {
   sidebar: SIDEBAR_MOCKS,
   logo: LOGO_MOCKS,
   icon: ICON_MOCKS,
   bottomBar: BOTTOM_BAR_MOCKS
};
