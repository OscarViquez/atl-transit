import { Badges } from '../types';

export interface Header {
   title: string;
   description?: string;
   badges?: Badges[];
}

/**
 * ComponentState is an interface that defines the state of a component.
 * @property isLoading - A boolean indicating whether the component is in a loading state.
 * @property systemMode - A string that can be either 'light' or 'dark', indicating the system mode for the component.
 * @property error - An optional boolean indicating whether the component is in an error state.
 * @example 
 * const exampleComponentState: ComponentState = {
 *   isLoading: false,
 *   systemMode: 'light',
 *   error: true
 * };
 * This would create a state where the component is not loading, is in light mode, and is in an error state.
 */
export interface ComponentState {
   isLoading: boolean; // loading state for the component
   systemMode: 'light' | 'dark' ; // system mode for the component
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
