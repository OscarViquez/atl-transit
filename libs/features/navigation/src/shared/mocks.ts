import { PageNavigationItem } from './interfaces';

export const NAV_ROUTES: PageNavigationItem[] = [
   {
      icon: 'after:content-vehicle-subway-filled',
      label: 'Trains',
      routerLink: '/trains'
   },
   {
      icon: 'after:content-vehicle-bus-filled',
      label: 'Buses',
      routerLink: '/buses'
   },
   {
      icon: 'after:content-search-filled',
      label: 'Search',
      routerLink: ''
   },
   {
      icon: 'after:content-wallet-filled',
      label: 'Cards',
      routerLink: '/card'
   },
   {
      icon: 'after:content-map-filled',
      label: 'Maps',
      routerLink: '/maps'
   }
];
