import { Dropdown } from '../models';

export const DropDownMock: Dropdown[] = [
   {
      imagePath: '/warning.svg',
      imageAlt: 'warning symbol',
      title: 'Five Points Station',
      subtitle: 'Elevator Malfunction'
   },
   {
      imagePath: '/warning.svg',
      imageAlt: 'check mark symbol',
      title: 'Five Points Station',
      subtitle: 'Southbound Operational'
   },
   {
      imagePath: '/warning.svg',
      imageAlt: 'alert symbol',
      title: 'Five Points Station',
      subtitle: 'North Springs Trains Delay'
   }
];

export const DropDownSingle: Dropdown = {
   imagePath: '/warning.svg',
   imageAlt: 'warning symbol',
   title: 'Five Points Station',
   subtitle: 'Elevator Malfunction'
};
