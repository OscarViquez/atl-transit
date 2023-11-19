
export interface Sidebar {
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
