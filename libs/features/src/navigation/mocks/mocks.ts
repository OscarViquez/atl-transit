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
