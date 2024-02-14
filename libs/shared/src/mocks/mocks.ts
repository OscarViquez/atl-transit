import { Header } from '../models';

/**
 * Store Mocks for the Shared Folder
 *
 * ==================================================================
 *
 * Best Practices for Mocks:
 * 1. Variables should be named in all caps and end with _MOCKS.
 * 2. All Mocks should be exported at the bottom of the file in the NAVIGATION_FEATURE_MOCKS object.
 * 3. If the content is static, it should be stored in mocks.ts.
 */

const CARDHEADER_MOCKS: Header = {
   title: 'Advisories',
   description: 'and Alerts Notifications'
};

const HERO_MOCKS: Header = {
   title: 'Train Arrivals',
   description: 'View arrival times of rail lines in the area.'
};

const SEARCHBAR_MOCKS = {
   placeholder: 'Search',
   icon: 'search',
   keyboardShortcut: '+ K'
};

export const SHARED_MOCKS = {
   card: CARDHEADER_MOCKS,
   hero: HERO_MOCKS,
   search: SEARCHBAR_MOCKS
};
