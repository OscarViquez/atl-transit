import { Icon } from "../types";

export interface IconComponent {
   ref?: HTMLElement;
   id?: string;
   size?: string | number;
   className?: string;
}

export interface Header {
   title: string;
   subtitle?: string;
}

export interface UserInterface {
   name?: string;
   longitude: number;
   latitude: number;
}

export interface PageHeader {
   mode:  string; 
   logo: Icon;
   headerIcons?: Icon[];
   pages: PageHyperlink[];
}

export interface PageHyperlink {
   active: boolean;
   icon: Icon;
   name: string;
   url: string;
}