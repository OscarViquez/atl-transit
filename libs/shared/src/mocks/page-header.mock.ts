import { PageHeader } from '../models';

// * Should be used when serving the app
export const pageHeaderContent: PageHeader = {
   mode: 'light',
   logo: {
      name: 'logo',
      alt: 'image of logo',
      path: '/assets/icons/logo.svg'
   },
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
         url: '/buses'
      },
      {
         active: false,
         icon: 'path to icon here',
         name: 'Steet Car',
         url: '/streetcar'
      },
      {
         active: false,
         icon: 'path to icon here',
         name: 'Advisories',
         url: '/advisories'
      },

      {
         active: false,
         icon: 'path to icon here',
         name: 'Breeze Card',
         url: '/breezecard'
      }
   ],
   icons: [
      {
         name: 'hamburgerIcon',
         alt: 'icon of menu',
         path: '/assets/icons/menu-icon-light.svg'
      },
      {
         name: 'searchIcon',
         alt: 'icon of search',
         path: '/assets/icons/search-icon-light.svg'
      },
      {
         name: 'closeIcon',
         alt: 'icon of search',
         path: '/assets/icons/close-icon-light.svg'
      }
   ]
};
