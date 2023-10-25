import { GenericHeader } from 'shared';

export interface ISearchModalStatics {
   header: GenericHeader;
   body?: ISearchModalBody;
}

export interface ISearchModalBody {
   results: string;
}
