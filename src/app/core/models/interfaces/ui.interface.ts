import { Badge } from '../types/ui.types';

export interface Header {
  title: string;
  description?: string;
  badges?: Badge[];
}

export interface NavMenuItem {
  label: string;
  routerLink: string;
}

export interface ListItem {
  name: string;
  badgeLabel?: string;
  description?: string;
}
