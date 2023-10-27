import { GenericHeader } from 'shared';

export interface SearchModalStatics {
   header: GenericHeader;
   body?: SearchModalBody;
}

export interface SearchModalBody {
   results: string;
}
