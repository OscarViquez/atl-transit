import { Button } from './button.interface';
import { Header } from './common.interface';

export interface AdvisoryCard {
   /* Card Title */
   header: Header
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
