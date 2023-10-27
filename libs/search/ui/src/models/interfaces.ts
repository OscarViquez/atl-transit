import { ButtonInputType } from "shared";

export interface SearchResults {
   label: string;
   action: ButtonInputType;
   disabled?: boolean;
   description?: string;
}
