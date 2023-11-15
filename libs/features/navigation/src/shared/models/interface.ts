import { Icon } from '@atl-transit/shared';

export interface Sidebar {
   // Dark Or Light Mode
   mode: string;
   logo: {
      alt: string;
      url: string;
   };
   pages: Page[];
   quickLinks: QuickLink;
}

export interface Page {
   active: boolean;
   pageName: string;
   pageUrl: string;
}

export interface QuickLink {
   title: string;
   links: Links[];
}

export interface Links {
   label: string;
   url: string;
}

export interface NavigationUI {
   pageName: string;
   index: number;
}

export interface MobileNav {
   mode: string;
   logo: Icon;
   pages: PageHyperlink[];
   icons: Icon[];
}

export interface PageHyperlink {
   active: boolean;
   icon: string;
   name: string;
   url: string;
}
