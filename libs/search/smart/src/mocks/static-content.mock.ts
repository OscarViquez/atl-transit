import { ButtonInputType, GenericHeader } from 'shared';
import { SearchResults } from '@search-ui';

export const GenericHeaderMock: GenericHeader = {
   title: 'Where to?'
};


export const SearchResultsMock: SearchResults[] = [
   {
      label: 'North Springs',
      action: ButtonInputType.HYPERLINK
   },
   {
      label: 'Sandy Springs',
      action: ButtonInputType.HYPERLINK
   },
   {
      label: 'Dunwoody',
      action: ButtonInputType.HYPERLINK
   },
   {
      label: 'Medical Center',
      action: ButtonInputType.HYPERLINK
   },
   {
      label: 'Buckhead',
      action: ButtonInputType.HYPERLINK
   }
];
