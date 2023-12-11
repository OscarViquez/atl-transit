import { ButtonProps } from '@atl-transit/shared';
import { ArrivalHeaders, StationCardFeedbackMessage } from '../models/interfaces';

export const StationFeedbackMessages: StationCardFeedbackMessage = {
   emptySaved: {
      icon: {
         category: 'navigation',
         name: 'overview',
         mode: 'light'
      },
      message: {
         title: 'No Saved Stations',
         subtitle: 'Explore and Add Stations to Your Favorites for Quick Access.'
      }
   },
   emptyArrivals: {
      icon: {
         category: 'navigation',
         name: 'overview',
         mode: 'light'
      },
      message: {
         title: 'No Stations Found',
         subtitle: 'There seems to be no upcoming arrivals at this time.'
      }
   }
};

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
