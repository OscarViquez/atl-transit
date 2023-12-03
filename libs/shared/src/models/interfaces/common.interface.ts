import { UiModes } from '../types';

export interface GenericHeader {
   title: string;
   subtitle?: string;
}

export interface UserInterface {
   name?: string;
   longitude: number;
   latitude: number;
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
