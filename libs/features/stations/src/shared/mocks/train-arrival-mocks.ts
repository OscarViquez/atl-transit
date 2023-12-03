import { ButtonProps } from '@atl-transit/shared';
import { ArrivalHeaders, GenericTrainErrorMessage } from '../models/interfaces';

export const GenericTrainErrorMocks: GenericTrainErrorMessage[] = [
   {
      title: 'No Saved Stations',
      description: 'Save your frequently visited stations for easy access'
   },
   {
      title: 'No Stations Found',
      description: 'There seems to be no upcoming arrivals at this time'
   }
];

export const SectionHeaderMocks: ArrivalHeaders = {
   main: {
      title: 'Train arrivals',
      subtitle: 'Real-time information on the scheduled arrival times of trains.'
   },
   explore: {
      title: 'Explore Station Resources',
      subtitle: 'Discover Maps, Parking, and Ticket Information'
   }
};

export const TabContentMocks: ButtonProps[] = [
   {
      content: {
         label: 'Nearest',
         id: 'nearest'
      },
      type: 'default',
      variant: 'primary',
      mode: 'light',
      align: 'center'
   },
   {
      content: {
         label: 'Saved',
         id: 'saved'
      },
      type: 'default',
      variant: 'secondary',
      mode: 'light',
      align: 'center'
   }
];
