import { PageHeader } from '../models';

export const pageHeaderMock: PageHeader = {
   mode: 'light',
   logo: 'logo path here',
   pages: [
      {
         active: true,
         icon: 'path to icon here',
         name: 'Trains',
         url: '/arrivals'
      },
      {
         active: false,
         icon: 'path to icon here',
         name: 'Buses',
         url: '/'
      },
      {
         active: false,
         icon: 'path to icon here',
         name: 'Steet Car',
         url: '/'
      },
      {
         active: false,
         icon: 'path to icon here',
         name: 'Advisories',
         url: '/'
      },

      {
         active: false,
         icon: 'path to icon here',
         name: 'Breeze Card',
         url: '/'
      }
   ]
};
