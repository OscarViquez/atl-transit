import { PreviewPage } from '../models/';

export const PREVIEW_PAGE_MOCKS: Partial<PreviewPage> = {
   title: 'This page is unavailable',
   description: 'Please check out our train page to get the latest updates on arrival time!',
   link: {
      label: 'View Train Page',
      url: '/trains'
   }
};
