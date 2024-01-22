import { GenericHeader } from '../models';

/**
 * * Content for Any Shared Components
 * * is stored in this file.
 *
 * * RULES:
 * * Variables should be named in all caps and end with _MOCKS
 * * All Mocks should be exported at the bottom of the file,
 * @var SHARED_MOCKS .
 */

const CARDHEADER_MOCKS: GenericHeader = {
   title: 'Advisories',
   subtitle: 'and Alerts Notifications'
};

const HERO_MOCKS: GenericHeader = {
   title: 'Train Arrivals',
   subtitle: 'View arrival times of rail lines in the area.'
};

export const SHARED_MOCKS = {
   card: CARDHEADER_MOCKS,
   hero: HERO_MOCKS
};
