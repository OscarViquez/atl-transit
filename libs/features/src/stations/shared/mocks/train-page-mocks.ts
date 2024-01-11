import { ButtonProps } from '@atl-transit/shared';
import { ArrivalHeaders, StationCardFeedbackMessage, StationResource } from '../models/interfaces';

const PrevButtonMocks: ButtonProps = {
   content: {
      label: 'Prev',
      id: 'prev'
   },
   type: 'default',
   variant: 'secondary',
   mode: 'light',
   align: 'center',
};

const NextButtonMocks: ButtonProps = {
   content: {
      label: 'Next',
      id: 'next'
   },
   type: 'default',
   variant: 'secondary',
   mode: 'light',
   align: 'center',

};

const StationFeedbackMessagesMocks: StationCardFeedbackMessage = {
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
         title: 'No Arrivals Found',
         subtitle: 'There seems to be no upcoming arrivals at this time.'
      }
   }
};

const TileStationResourceMocks: StationResource[] = [
   {
      id: 1,
      icon: {
         category: 'stations',
         name: 'parking-area',
         mode: ''
      },
      title: 'Parking'
   },
   {
      id: 2,
      icon: {
         category: 'stations',
         name: 'card',
         mode: ''
      },
      title: 'Breeze Card'
   },
   {
      id: 3,
      icon: {
         category: 'stations',
         name: 'mini-map',
         mode: ''
      },
      title: 'Rail Map'
   },
   {
      id: 4,
      icon: {
         category: 'stations',
         name: 'schedule',
         mode: ''
      },
      title: 'Schedules'
   }
];

const SectionHeaderMocks: ArrivalHeaders = {
   main: {
      title: 'Train arrivals',
      subtitle: 'Real-time information on the scheduled arrival times of trains.'
   },
   explore: {
      title: 'Explore Station Resources',
      subtitle: 'Discover Maps, Parking, and Ticket Information'
   }
};

const TabContentMocks: ButtonProps[] = [
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

const TrainPageConfigMocks = {
   maxStationArrivals: 2,
   maxTrainArrivals: 3,
   currentTabIndex: 0
};

export const TrainPageContentMocks = {
   header: SectionHeaderMocks,
   tab: TabContentMocks,
   feedback: StationFeedbackMessagesMocks,
   tiles: TileStationResourceMocks,
   config: TrainPageConfigMocks
};

export const PaginationButtonMocks = {
   prev: PrevButtonMocks,
   next: NextButtonMocks
}  

