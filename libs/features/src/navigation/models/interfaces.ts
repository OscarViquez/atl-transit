import { Icon } from "@atl-transit/shared";

export interface NavigationItem {
   label: string;
   icon: Icon | string;
   route?: string;
}
