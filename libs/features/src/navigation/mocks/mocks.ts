import { Icon } from '@atl-transit/shared';
import { NavigationItem } from '../models/interfaces';

/**
 * * Content for sidebar, navbar, or any other navigation component
 * * is stored in this file.
 *
 * * RULES:
 * * Variables should be named in all caps and end with _MOCKS
 * * All Mocks should be exported at the bottom of the file,
 * * @ the NAVIGATION_FEATURE_MOCKS object.
 * * If the content is static, it CAN be stored in mocks.ts
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

const SIDEBAR_MOCKS: NavigationItem[] = [
   {
      label: 'Home',
      icon: {
         category: 'navigation',
         name: 'overview',
         mode: 'light'
      },
      route: '/overview'
   },
   {
      label: 'Trains',
      icon: {
         category: 'navigation',
         name: 'trains',
         mode: 'light'
      },
      route: '/trains'
   }
];

export const NAVIGATION_FEATURE_MOCKS = {
   sidebar: SIDEBAR_MOCKS,
   logo: LOGO_MOCKS,
   icon: ICON_MOCKS
};
