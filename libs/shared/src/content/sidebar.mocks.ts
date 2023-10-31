import { Sidebar } from '../models';

export const SidebarMock: Sidebar = {
   mode: 'light',
   logo: {
      alt: 'Logo',
      url: '/assets/icons/logo.svg'
   },
   pages: [
      {
         active: true,
         pageName: 'Trains',
         pageUrl: '/arrivals'
      },
      {
         active: false,
         pageName: 'Buses',
         pageUrl: '#'
      },
      {
         active: false,
         pageName: 'Steet Car',
         pageUrl: '#'
      },
      {
         active: false,
         pageName: 'Advisories',
         pageUrl: '#'
      },

      {
         active: false,
         pageName: 'Breeze Card',
         pageUrl: '#'
      }
   ],
   quickLinks: {
      title: 'Quick Links',
      links: [
         {
            label: 'Contact Info',
            url: '#'
         },
         {
            label: 'News & Updates',
            url: '#'
         },
         {
            label: 'Accessibility Services',
            url: '#'
         }
      ]
   }
};


