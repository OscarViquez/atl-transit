import { NavMenuItem } from '../interfaces/ui.interface';

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  {
    label: 'Trains',
    routerLink: '/trains',
  },
  {
    label: 'Buses',
    routerLink: '/bus',
  },
  {
    label: 'Search',
    routerLink: '/search',
  },
  {
    label: 'Alerts',
    routerLink: '/alerts',
  },
  {
    label: 'More',
    routerLink: '/menu',
  },
];

export const STATION_TRAIN_ARRIVAL_CARD_MESSAGING = {
  title: 'No upcoming arrivals',
  description: 'Please check back later to see upcoming train arrivals.',
};
