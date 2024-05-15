import { Badges } from '../types';

export interface Header {
   title: string;
   description?: string;
   badges?: Badges[];
}

export interface ComponentState {
   isLoading: boolean; // loading state for the component
   systemMode: 'light' | 'dark'; // system mode for the component
   error?: boolean; // error state for the component
}

// TODO: Remove @interface Button after removing this interface from methods // REMOVE THIS ❌
// * NOTE: Added Legacy suffix to the name to avoid conflict with the new button types
export interface ButtonLegacy {
   /* text content for button */
   text: string;
   /* Size for button */
   size?: 'small' | 'medium' | 'large';
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
