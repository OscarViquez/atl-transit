import { UiModes, ButtonSize } from '../types';

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
