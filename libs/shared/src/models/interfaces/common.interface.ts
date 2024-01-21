import { UiModes, ButtonSize } from '../types';

export interface GenericHeader {
   title: string;
   subtitle?: string;
}

export interface ComponentState {
   isLoading: boolean; // loading state for the component
   systemMode: UiModes; // system mode for the component
   error?: boolean; // error state for the component
}

export interface NavigationUI {
   pageName: string;
   index: number;
}



export interface Button {
   /* text content for button */
   text: string;
   /* Size for button */
   size?: ButtonSize;
   /* text content for button */
   mode?: UiModes;
   /* icon content for button */
   icon?: string;
   /* links button */
   hyperLink?: string;
   /* whether button is an active state */
   active?: boolean;
   /* assigned Id for button */
   id?: string;
   /* whether button should be disabled */
   disabled?: boolean;
}


export interface AdvisoryCard {
   /* Card Title */
   header: GenericHeader
   /* Content For Dropdown */
   dropdown: Dropdown[];
   /* Content For Button */
   button: Button;
}

export interface Dropdown {
   /* Path of Image */
   imagePath: string;
   /* Alt text for Image */
   imageAlt: string;
   /* title of card */
   title: string;
   /* Path of Image */
   subtitle: string;
}
