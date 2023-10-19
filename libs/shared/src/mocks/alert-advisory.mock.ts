import { AdvisoryCard } from '../models';
import { DropDownMock } from './dropdown.mock';

export const AdvisoryAlertMock: AdvisoryCard = {
   header: {
      title: 'Advisories',
      subtitle: 'and Alerts Notifications'
   },
   dropdown: DropDownMock,
   button: {
      text: 'Go to Advisories',
      mode: 'light'
   }
};
