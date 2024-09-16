import { ListItem } from '@atl-transit/core';

export interface SearchResults {
  catergory: string;
  list: SearchListItem[];
}

export interface SearchListItem extends ListItem {
  url?: string;
}
