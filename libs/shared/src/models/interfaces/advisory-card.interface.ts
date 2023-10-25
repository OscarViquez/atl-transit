import { Button } from './button.interface';
import { GenericHeader } from './common.interface';

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
